# fusor_ui

Fusor_ui is a rails engine that is added to [Foreman](https://github.com/theforeman/foreman/).

Fusor_ui is essentially the output from the /dist directory of [https://github.com/fusor/fusor-demo/](https://github.com/fusor/fusor-demo/) which is an [ember-cli](http://www.ember-cli.com/) project that contains assets such as javascript, stylesheets, images, and fonts.

## Important Note

Do NOT work directly on the files in [app/assets](https://github.com/fusor/fusor/tree/master/ui/app/assets). These files will be overwritten by future commits when the code in [fusor-demo](https://github.com/fusor/fusor-demo/) changes.

The /dist directory is listed in the [.gitignore](https://github.com/fusor/fusor-demo/blob/master/.gitignore) file of [fusor-demo](https://github.com/fusor/fusor-demo/) so you wont find it in the [fusor-demo](https://github.com/fusor/fusor-demo/) repository.

The /dist distory is generated automatically by [ember-cli](http://www.ember-cli.com/) if you run `ember server` locally or inside the project or `ember build`.

Follow the workflow below for more steps.

## Workflow

1. Clone [fusor-demo](https://github.com/fusor/fusor-demo/) to your HOME directory (cd ~) on your local computer. If not in home directory, you will need to modify the [prep](https://github.com/fusor/fusor/blob/master/ui/prep) script.
2. `cd fusor-demo`
3. run `ember build`
4. Clone [fusor](https://github.com/fusor/) to your local computer
5. `cd fusor/ui`
6. run script `./prep` which copies files from `fusor-demo/dist` to the `fusor/ui` repo
7. `cd ../` to return to local `fusor` directory
8. git push changes to your forked repo or fusor and create PR

## Installation

```ruby
gem 'fusor_ui', :git => 'https://github.com/fusor/ui.git
```

## Usage

Go to your Foreman instance and you should see a new menu item on the main menu entitled **Fusor Installer**.

## Contributing

Fork and send a Pull Request. Thanks!

## Copyright

TBD this whole section

Copyright (c) *2014* *Joseph Magen, Red Hat Engineering*

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

