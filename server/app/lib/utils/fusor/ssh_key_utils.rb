
module Utils
  module Fusor
    class SSHKeyUtils
      def initialize(deployment, key_type, path)
        @deployment = deployment
        @key_type = key_type
        @key_from_path = path
        @key_to_path   = ".ssh"
        @key_base_name = "id_#{@key_type}"
      end

      def get_ssh_private_key_path
        return "#{@key_from_path}/#{@key_base_name}"
      end

      def generate_ssh_keys
        if File.directory?(@key_from_path)
          ::Fusor.log.debug "====== ssh keys folder '#{@key_from_path}' already exists! skipping key generation"
        else
          Utils::Fusor::CommandUtils.run_command("mkdir -p #{@key_from_path}")
          Utils::Fusor::CommandUtils.run_command("ssh-keygen -f #{@key_from_path}/#{@key_base_name} -N '' -t #{@key_type}")
          ::Fusor.log.debug "====== ssh keys have been generated"
        end
      end

      def copy_keys_to_user(hostname, username, password)
        copy_keys_to_root(hostname, password)
        client = Utils::Fusor::SSHConnection.new(hostname, 'root', password)
        client.execute("useradd #{username}")
        client.execute("echo '#{username}        ALL=(ALL)       NOPASSWD: ALL' >> /etc/sudoers")
        client.execute("runuser -l #{username} -c 'mkdir ~/#{@key_to_path} && chmod 700 ~/#{@key_to_path}'")
        client.execute("cp ~/#{@key_to_path}/#{@key_base_name}.pub /home/#{username}/#{@key_to_path}/")
        client.execute("chown #{username}:#{username} /home/#{username}/#{@key_to_path}/#{@key_base_name}.pub")
        client.execute("cp ~/#{@key_to_path}/#{@key_base_name} /home/#{username}/#{@key_to_path}/")
        client.execute("chown #{username}:#{username} /home/#{username}/#{@key_to_path}/#{@key_base_name}")
        client.execute("runuser -l #{username} -c 'cat ~/#{@key_to_path}/#{@key_base_name}.pub >> ~/#{@key_to_path}/authorized_keys'")
        client.execute("runuser -l #{username} -c 'chmod 644 ~/#{@key_to_path}/#{@key_base_name}.pub'")
        client.execute("runuser -l #{username} -c 'chmod 600 ~/#{@key_to_path}/#{@key_base_name}'")
        client.execute("runuser -l #{username} -c 'chmod 644 ~/#{@key_to_path}/authorized_keys'")
      end

      def copy_keys_to_root(hostname, password)
        client = Utils::Fusor::SSHConnection.new(hostname, 'root', password)
        client.execute("mkdir -p ~/#{@key_to_path} && chmod 700 ~/#{@key_to_path}")
        ssh_keys = ["#{@key_base_name}", "#{@key_base_name}.pub"]
        ssh_keys.each { |key|
          from_path = "#{@key_from_path}/#{key}"
          to_path   = "/root/#{@key_to_path}/#{key}"
          Net::SCP.start(hostname, "root", :password => password, :paranoid => false) do |scp|
            scp.upload!(from_path, to_path)
          end
        }
        client.execute("cat ~/#{@key_to_path}/#{@key_base_name}.pub > ~/#{@key_to_path}/authorized_keys")
        client.execute("chmod 644 ~/#{@key_to_path}/authorized_keys")
      end
    end
  end
end
