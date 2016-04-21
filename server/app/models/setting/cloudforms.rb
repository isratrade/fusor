module Fusor
  class Setting::Cloudforms < ::Setting

    def self.load_defaults
      return unless super

      self.transaction do
        [
          self.set('cloudforms_vm_disk_size', N_("Size of Storage (GB) for VM for CloudForms"), 40),
          self.set('cloudforms_db_disk_size', N_("Size of Storage (GB) for DB for CloudForms"), 40),
          self.set('cloudforms_ram', N_("Amount of RAM (GB) for CloudForms"), 6),
<<<<<<< HEAD
<<<<<<< HEAD
          self.set('cloudforms_vcpu', N_("Number of vCPU's for CloudForms"), 4)
=======
          self.set('cloudforms_vcpu', N_("Number of vCPU's for CloudForms"), 4),
>>>>>>> 8228254... Add default settings for CFME and OSE VMs editable by Satellite6
=======
          self.set('cloudforms_vcpu', N_("Number of vCPU's for CloudForms"), 4)
>>>>>>> 9d4c2be... rubocop: whitespace, indentation.
        ].each { |s| self.create! s.update(:category => "Setting::Cloudforms") }

      end
      true
    end

  end
end
