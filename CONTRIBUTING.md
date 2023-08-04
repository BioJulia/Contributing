# Contributing to BioJulia
:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

This document contains information relevant for people who want to contribute to BioJulia repositories,
which are hosted in the [BioJulia Organization](https://github.com/BioJulia) on
GitHub.

## Table of contents
* [Contact information](#contact-information)
* [Making an issue](#making-an-issue)
* [Making a pull request](#making-a-pull-request)
* [Becoming a package maintainer](#becoming-a-package-maintainer)
* [Creating a new repository under BioJulia](#creating-a-new-biojulia-repository)

## Contact information
If you have questions about specific repositories, contact the repository maintainers.

For issues about BioJulia in general, contact the current BioJulia admins:
- [Kevin Bonham](https://github.com/kescobo)
- [Jakob Nybo Nissen](https://github.com/jakobnissen)

For quick questions, you can also find us on [The Julia Language Slack](https://julialang.org/slack/) in the `#biology` channel.

For discussions, the best place is either the [Biology domain on the Julia Language Discourse](https://discourse.julialang.org/c/domain/bio), or our [GitHub discussions page](https://github.com/orgs/BioJulia/discussions).

## Making an issue
Issues are meant for bug reports, feature requests, and discussions about potential changes to a particular repository.
For questions about usage, [ask for help by contacting us instead](#contact-information).

Before filing an issue, make sure to read the documentation of the package in question, and search the issue tracker if the issue you want to raise already exists.
If the issue exists, but it's closed, you can make a new issue and link to the old, closed issue.

When filing a bug report, it's important that we can understand what the bug is about.
If the existence of a bug is not obvious, you should describe in the issue why you think the observed behaviour is buggy.

It's also important that we can reproduce (recreate) the bug ourselves.
The easier it is for us to reproduce the bug, the faster and easier we can fix it, and the more likely we are to do it.

To make a bug reproducible, the first step is to reduce it to a _minimal working example_ (MWE).
This is the shortest, simplest code you can find that demonstrates the bug.
You can obtain an MWE by iteratively simplifying the code in which you found the bug.
Ideally, a MWE is only a few lines long, and can be copy-pasted into a fresh REPL.

To make your MWE reproducible, you also need to specify your environment:
* The version of Julia you observe the bug with
* The version of all loaded packages. Your MWE ideally makes use of as few packages as possible. This can be found by typing `st -m` in the Julia Pkg mode.

## Making a pull request
If you want to contribute code (fix bugs, add features or such) to an existing BioJulia repository, simply submit a pull request (PR) to the repo, you do not need permission to open a PR.
However, the repository maintainer might decline your contributions if they believe your PR is out of scope for the package, contains serious design flaws, or such.
Hence, before embarking on a large, laborious PR, you might want to reach out to the repository maintainers for approval first.

Individual repositories have different requirements for PRs, but in general, a good PR is characterized by:
* All user-facing functions and types have docstrings with doctests
* All user facing functions are mentioned in the package documentation
* Most or all lines of code are tested with unit tests.
  Most repositories have a code coverage bot that can inform you if you have written tests for all your code

Try to emulate the code style and architechture of the repo you submit your PR to.

## Becoming a package maintainer
There is no formal process to become a package maintainer, instead, existing package maintainers decide who can get commit rights to BioJulia repos.
If a package has no maintainers that can be reached, reach out to [the BioJulia admins](#contact-information).

Most people will require you to have made a few valuable PRs to a repository before they will grant you maintainer status.
So, if you want to be a maintainer, it's best to start by acting as a maintainer, and begin making PRs.

## Creating a new BioJulia repository
There are two main ways to get a repo under BioJulia:

1. Create a new repository directly under BioJulia
2. Move an existing repository to BioJulia

In general, only people who have been involved in BioJulia as maintainers can create new BioJulia repositories, so for most people, you will need to create a repo under your own name, then move it to BioJulia.

Having your repo in BioJulia gives your package visibility, and more potential to be maintained by others if you are no longer able to maintain your package.
You also have access to BioJulia infrastructure such as paid CI (although at the time of writing, BioJulia only uses free services)

Please note that when you transfer your package to BioJulia, the BioJulia organisation owns the package. This implies:
* The name of the package may need to be changed
* Other BioJulia members may be added as maintainers if you become unreachable

If the BioJulia admins agree to transfer your repo to BioJulia, we will collaborate with you to ensure the code quality, code licensing, documentation and continuous integration of the package is up to BioJulia standards.
