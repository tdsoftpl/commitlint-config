# [@tdsoft/commitlint-config](https://www.npmjs.com/package/@tdsoft/commitlint-config)

## What is commitlint

Commitlint checks if your commit messages meet the specified requirements.

### Format
`<type>(<scope>): <subject>`

`<scope>` is optional

### Example
`feat: introduce useClipboard hook`

## @tdsoft config

|commit type|example use case                               |
|-----------|-----------------------------------------------|
|chore      |all other cases - set staging API url          |
|ci         |ci/cd related - update Jenkinsfile, Dockerfile |
|docs       |changes to the documentation                   |
|feat       |adding new functionality                       |
|fix        |bug fixing                                     |
|refactor   |refactoring code - renaming variable           |
|revert     |reverting commit                               |
|style      |changing styles without changing business logic|
|test       |updating/adding test suites                    |
|version    |bumping version tag                            |

> Note that in conventional commits' config "style" is used for code
> formatting. In this config, "style" is used for *UI* styling related
> commits that do not change business logic.

## How to use this config

Use extends option in `.commitlintrc.json`
```
{
  "extends": ["@tdsoft"]
}
```