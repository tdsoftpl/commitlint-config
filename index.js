module.exports = {
    rules: {
        "body-leading-blank": [1, "always"],
        "body-max-line-length": [0],
        "footer-leading-blank": [1, "always"],
        "footer-max-line-length": [0],
        "header-max-length": [0],
        "scope-case": [0],
        "subject-case": [0],
        "subject-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "type-case": [2, "always", "lower-case"],
        "type-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            [
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "refactor",
                "revert",
                "style",
                "test",
                "version"
            ]
        ]
    }
};