# Contributing to BioJulia
:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

This document contains information relevant to people who want to contribute to BioJulia repositories, which are hosted in the [BioJulia Organization](https://github.com/BioJulia) on GitHub.

## Table of contents
* [Contact information](#contact-information)
* [Making an issue](#making-an-issue)
* [Making a pull request](#making-a-pull-request)
* [Becoming a package maintainer](#becoming-a-package-maintainer)
* [Creating a new repository under BioJulia](#creating-a-new-biojulia-repository)
* [Package maintenance status](#package-maintenance-status)

## Contact information
If you have questions about specific repositories, contact the repository maintainers.

For issues about BioJulia in general, please feel free to contact the current [BioJulia admins](https://github.com/orgs/BioJulia/teams/admins).

For quick questions, you can also find us on [The Julia Language Slack](https://julialang.slack.com/channels/biology) in the `#biology` channel.

For discussions, the best place is either the [Biology domain on the Julia Language Discourse](https://discourse.julialang.org/c/domain/bio), or our [GitHub discussions page](https://github.com/orgs/BioJulia/discussions).

## Making an issue
Issues are meant for bug reports, feature requests, and discussions about potential changes to a particular repository.
For questions about usage, [ask for help by contacting us instead](#contact-information).

Before filing an issue, make sure to read the documentation of the package in question, and search the issue tracker to see if the issue you want to raise already exists.
If the issue exists, but it's closed, you can make a new issue and link to the closed issue.

When filing a bug report, it's important that we can understand what the bug is about.
If the existence of a bug is not obvious, you should describe in the issue why you think the observed behaviour is buggy.

It's also important that we can reproduce (recreate) the bug ourselves.
The easier it is for us to reproduce the bug, the faster and easier we can fix it, and the more likely we are to do it.

To make a bug reproducible, the first step is to reduce it to a _minimal working example_ (MWE).
This is the shortest, simplest code you can produce that demonstrates the bug.
You can obtain an MWE by iteratively simplifying the code in which you found the bug.
Ideally, a MWE is only a few lines long, and can be copy-pasted into a fresh REPL.

To make your MWE reproducible, you also need to specify your environment:
* The version of Julia you observe the bug with.
* The version of all loaded packages.
  This can be found by typing `st -m` in the Julia Pkg mode.
  Your MWE ideally makes use of as few packages as possible.

## Making a pull request
If you want to contribute code (fix bugs, add features or such) to an existing BioJulia repository, simply submit a pull request (PR) to the repo.
You do not need permission to open a PR.
However, the repository maintainer might decline your contributions if they believe your PR is out of scope for the package, contains serious design flaws, or such.
Hence, before embarking on a large, laborious PR, you might want to reach out to the repository maintainers for approval first.

Individual repositories have different requirements for PRs, but in general, a good PR is characterized by the following:
* All user-facing functions and types have docstrings with doctests.
* All user-facing functions are mentioned in the package documentation.
* Most or all lines of code are tested with unit tests.
  Most repositories have a code coverage bot that can inform you if you have written tests for all your code.
* Attempts to emulate the code style and architecture of the repo you submit your PR to.

## Becoming a package maintainer
There is no formal process to become a package maintainer, instead, existing package maintainers decide who can get commit rights to BioJulia repos.
If a package has no maintainers that can be reached, reach out to [the BioJulia admins](#contact-information).

Most people will require you to have made a few valuable PRs to a repository before they will grant you maintainer status.
So, if you want to be a maintainer, it's best to start by acting as a maintainer, and begin making PRs.

## Creating a new BioJulia repository
There are two main ways to get a repo under BioJulia:

1. Create a new repository directly under BioJulia.
2. Move an existing repository to BioJulia.

In general, only people who have been involved in BioJulia as maintainers can create new BioJulia repositories, so for most people, you will need to create a repo under your own name and then move it to BioJulia.

Having your repo in BioJulia gives your package visibility, and more potential to be maintained by others if you are no longer able to maintain your package.
You also have access to BioJulia infrastructure, such as paid CI (although, at the time of writing, BioJulia only uses free services).

Please note that when you transfer your package to BioJulia, the BioJulia organisation owns the package.
This implies:
* The name of the package may need to be changed.
* Other BioJulia members may be added as maintainers if you become unreachable.

If the BioJulia admins agree to transfer your repo to BioJulia, we will collaborate with you to ensure the code quality, code licensing, documentation, and continuous integration of the package is up to BioJulia standards.

## Package maintenance status
We recommend that every BioJulia package carries a badge at the top of its README, stating how actively the package is maintained.
The purpose of the badge is to set expectations: it tells a prospective user whether they can rely on the package, and whether they can expect a response if they open an issue.
In the future, we may also use the badges to aggregate and promote packages in the BioJulia ecosystem, making them easier to discover.

There are three statuses:

### Maintained
[![BioJulia - Maintained](https://raw.githubusercontent.com/BioJulia/biojulia.github.io/main/badges/biojulia-maintained.svg)](https://biojulia.dev/)

At least one person considers themselves an active maintainer of the package.
A user can expect their issues and pull requests to be answered.

```markdown
[![BioJulia - Maintained](https://raw.githubusercontent.com/BioJulia/biojulia.github.io/main/badges/biojulia-maintained.svg)](https://biojulia.dev/)
```

### Functional; Maintainer needed
[![BioJulia - Functional; Maintainer needed](https://raw.githubusercontent.com/BioJulia/biojulia.github.io/main/badges/biojulia-functional-maintainer-needed.svg)](https://github.com/BioJulia/Contributing/blob/master/CONTRIBUTING.md#becoming-a-package-maintainer)

The package is expected to work, but we are searching for a maintainer.
A user cannot be sure that issues and pull requests will be answered, especially more technical ones.
The badge links to [Becoming a package maintainer](#becoming-a-package-maintainer), since someone clicking it may be interested in maintaining the package.

```markdown
[![BioJulia - Functional; Maintainer needed](https://raw.githubusercontent.com/BioJulia/biojulia.github.io/main/badges/biojulia-functional-maintainer-needed.svg)](https://github.com/BioJulia/Contributing/blob/master/CONTRIBUTING.md#becoming-a-package-maintainer)
```

### Deprecated
[![BioJulia - Deprecated](https://raw.githubusercontent.com/BioJulia/biojulia.github.io/main/badges/biojulia-deprecated.svg)](https://biojulia.dev/)

The package is no longer recommended, either because it does not work on recent Julia releases, or because it has been superseded by other Julia packages.
If the package has been superseded, we recommend that its README names the package that replaced it.

```markdown
[![BioJulia - Deprecated](https://raw.githubusercontent.com/BioJulia/biojulia.github.io/main/badges/biojulia-deprecated.svg)](https://biojulia.dev/)
```

### Using the badges
Copy the markdown for the status that applies, and place it at the top of your package's README, alongside the CI and documentation badges.

To be eligible for a badge, the repository must live in the [BioJulia](https://github.com/BioJulia), [JuliaHealth](https://github.com/JuliaHealth) or [EcoJulia](https://github.com/EcoJulia) GitHub organisation, or in another GitHub organisation approved by [the BioJulia admins](#contact-information), for example a lab organisation.
Personal repositories are not eligible.
This ensures that someone else can update the status if the maintainer becomes unreachable.

### Changing the status of a package
Anyone can propose a status change by opening an issue or a pull request on the repository in question.
If the package has a reachable maintainer, the decision is theirs.

If no maintainer responds:
* After roughly **one month**, the status may be changed if there is a good reason, for example that the package has stopped working on current Julia releases.
* After **six months**, the status may be changed without any particular reason.

If a maintainer later reappears, the status can always be changed back.

It is not possible to write down rules that cover every case, so please try to work it out in the spirit of the descriptions above.
If there is disagreement, the decision should be taken by the admins of the organisation the repository belongs to, together with the BioJulia admins if the repository is outside BioJulia.
