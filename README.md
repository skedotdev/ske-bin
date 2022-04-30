# The Ske Binary
Create new Ske projects or add Ske dependencies to an existing project easily with very short Composer-based commands.

## Requirements
- [PHP](https://php.net/) 8.0.0 or above (at least 8.0.18 recommended to avoid potential bugs)
- [Composer](https://getcomposer.org/)
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/) with [NPM](https://npmjs.com/) (Optional)

## Installation
- Install from [Packagist](https://packagist.org/packages/ske/bin) using [Composer](https://getcomposer.org):
```bash
composer global require ske/bin
```
- Install with [NPM](https://npmjs.com/package/ske-bin):
```bash
npm i -g ske-bin
```

## Usage
### Create a new Ske application
- Syntax:
  ```
  ske new <vendor-name> [<project-name>] [<package-version>]
  ```
- Example:
  ```
  ske new app new-ske-app
  ```
### Add a Ske dependency
- Syntax:
  ```
  ske add <vendor-name> [<package-version>]
  ```
- Example:
  ```
  ske add pkg
  ```

## Security Reports
Please send any sensitive issue to [report@sikessem.com](mailto:report@sikessem.com). Thanks!

## License
The Ske Binary is licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0/) - see the [LICENSE file](./LICENSE) for details.
