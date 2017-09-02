var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Contributing-1",
    "page": "Home",
    "title": "Contributing",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Welcome!-1",
    "page": "Home",
    "title": "Welcome!",
    "category": "section",
    "text": "This documentation lays out the guidelines and some tutorials for Biologists, Bioinformaticians, and Computational Biologists, who want to contribute to the BioJulia community.This documentation is split into two broad categories.The first section, called \"How do I...?\" contains a set of simple walkthrough style guides for contributing in different ways.The second section, called \"Policies and Guidelines\". This section contains the agreed on policies that members, maintainers, and administrators are expected to adhere to.  BioJulia welcomes contributions in several forms including through Github Pull Requests, through opening Github Issues, and through package submissions. BioJulia welcomes contributions of all kinds to the community, this includes but is not limited to code contributions.Take a look through the articles in the \"How do I...?\" section to get started."
},

{
    "location": "index.html#Our-community-code-of-conduct-1",
    "page": "Home",
    "title": "Our community code of conduct",
    "category": "section",
    "text": "We have a policy of being as open and inclusive as possible at all times, and we are always happy for people to contribute and join in the community. We welcome (and strive to be inclusive of) all people, of all backgrounds. To help us all achieve this we have a code of conduct that all members and visitors are expected to follow, please read this."
},

{
    "location": "help/package_submission.html#",
    "page": "Contribute packages",
    "title": "Contribute packages",
    "category": "page",
    "text": ""
},

{
    "location": "help/package_submission.html#Submitting-a-package-to-BioJulia-1",
    "page": "Contribute packages",
    "title": "Submitting a package to BioJulia",
    "category": "section",
    "text": "If you have written a package, and would like to have it listed under - and endorsed by - the BioJulia organization, you're agreeing to the following:Take responsibility/ownership for the continued maintenance of the package.\nAllowing BioJulia to have joint ownership of the package. This is so that the members can help you review and merge pull requests and other contributions, and also help you to develop new features. This policy ensures that you (as the package author and current maintainer) will have good support in maintaining your package to the highest possible quality.\nGo through a joint review/decision on a suitable package name. This usually the original package name. However, pakcage authors may be asked to rename their package to something more official and discoverable (by search engines and such) if it is contentious or non-standard.To submit your package, follow these steps:Announce your package on the BioJulia Gitter channel.\nAt this point maintainers will reach out to mentor and vouch for you and your package. They will:\nDiscuss with you a suitable name.\nHelp you ensure the the package is up to standard, and meets the code and contribution guidelines described on this site.\nAdd you to the BioJulia organisation (optional).\nTransfer ownership of the package."
},

{
    "location": "help/join_biojulia.html#",
    "page": "Join the BioJulia GitHub organisation",
    "title": "Join the BioJulia GitHub organisation",
    "category": "page",
    "text": ""
},

{
    "location": "help/join_biojulia.html#Joining-the-BioJulia-GitHub-Organisation-1",
    "page": "Join the BioJulia GitHub organisation",
    "title": "Joining the BioJulia GitHub Organisation",
    "category": "section",
    "text": "If you would like to be added to the BioJulia GitHub organisation, you may ask the current owners to add you.They will generally be willing to do so if you have done one or more of the following:You have registered a new package under BioJulia.\nA fix of a bug.\nPerformance improvements of existing code.\nNew code and additional functionality.\nAdditional and improved unit tests of existing code.\nAdditional or improved documentation of existing code and packages.None of these \"requirements\" are set in stone, but we prefer you to have done one or more of the above, as it gives good confidence that you are familiar with the process of filing-bugs/surfacing-issues/providing-documentation/reviewing-pull-requests, and are willing to do so. Any other avenue for demonstrating commitment to the community and the GitHub organisation will be considered."
},

{
    "location": "help/branching_guide.html#",
    "page": "Choose a branching model",
    "title": "Choose a branching model",
    "category": "page",
    "text": ""
},

{
    "location": "help/branching_guide.html#Choosing-and-using-a-brannching-moded-for-a-repo-1",
    "page": "Choose a branching model",
    "title": "Choosing and using a brannching moded for a repo",
    "category": "section",
    "text": "If you are a dedicated maintainer on a BioJulia package, you may be wondering which branching model to choose for development and maintenance of your code.If you are a contributor, knowing the branching model of a package may help you work more smoothly with the maintainer of the package.There are several options available, including git-flow.Below is a BioJulia recommended branching model for your repo, but it is only a suggestion. What is best for you as the dedicated maintainer, is best for _you_.The model below is a brief summary of the 'OneFlow model'. We describe it in summary here for convenience, but we recommend you check out the blog article as a lot more justification and reasoning is presented on _why_ this model is the way it is."
},

{
    "location": "help/branching_guide.html#Branching-model-1",
    "page": "Choose a branching model",
    "title": "Branching model",
    "category": "section",
    "text": ""
},

{
    "location": "help/branching_guide.html#During-development-1",
    "page": "Choose a branching model",
    "title": "During development",
    "category": "section",
    "text": "There is only one main branch - you can call it anything, but usually it'scalled master.Use temporary branches for features, releases, and bug-fixes. These temporarybranches are used as a convenience to share code with other developers and as a backup measure. They are always removed once the changes present on them are added to master.Features are integrated onto the master branch primarily in a way which keepsthe history linear and simple. A good compromise to the rebase vs. merge commit debate for this step is to first do an interactive rebase of the feature branch on master, and then do a non-fast-forward merge._Feature Example:_git checkout -b feature/my-feature master\n\n... Make commits to feature/my-feature to finish the feature ...\n\ngit rebase -i master\ngit checkout master\ngit merge --no-ff feature/my-feature\ngit push origin master\ngit branch -d feature/my-feature"
},

{
    "location": "help/branching_guide.html#Making-releases-1",
    "page": "Choose a branching model",
    "title": "Making releases",
    "category": "section",
    "text": "You create a new branch for a new release. It branches off from master at thepoint that you decided master has all the necessary features. This is not necessarily the tip of the master branch.From then on new work, aimed for the _next_ release, is pushed to master asalways, and any necessary changes for the _current_ release are pushed to the release branch. Once the release is ready, you tag the top of the release branch.Once the release is ready, tag the top of the release branch with a versionnumber. Then do a typical merge of the release branch into master. Any changes that were made during the release will now be part of master. Delete the release branch._Release Example:_git checkout -b release/2.3.0 9efc5d\n\n... Make commits to release/2.3.0 to finish the release ...\n\ngit tag 2.3.0\ngit checkout master\ngit merge release/2.3.0\ngit push --tags origin master\ngit branch -d release/2.3.0\ngit push origin :release/2.3.0Do your pushes, and go to GitHub to make your release available."
},

{
    "location": "help/branching_guide.html#Hot-fixes-1",
    "page": "Choose a branching model",
    "title": "Hot-fixes",
    "category": "section",
    "text": "When a hot-fix is needed, create a hot-fix branch, that branches from therelease tag that you want to apply the fix to.Push the needed fixes to the hot-fix branch.\nWhen the fix is ready, tag the top of the fix branch with a new release,merge it into master, finally delete the hot-fix branch._Hot-fix example:_git checkout -b hotfix/2.3.1 2.3.0\n\n... Add commits which fix the problem ...\n\ngit tag 2.3.1\ngit checkout master\ngit merge hotfix/2.3.1\ngit push --tags origin master\ngit branch -d hotfix/2.3.1IMPORTANT: There is one special case when finishing a hot-fix branch. If a release branch has already been cut in preparation for the next release before the hot-fix was finished, you need to merge the hot-fix branch not to master, but to that release branch."
},

{
    "location": "policy/biojulia_organisation.html#",
    "page": "Community Organisation",
    "title": "Community Organisation",
    "category": "page",
    "text": ""
},

{
    "location": "policy/biojulia_organisation.html#Organization-of-the-BioJulia-community.-1",
    "page": "Community Organisation",
    "title": "Organization of the BioJulia community.",
    "category": "section",
    "text": "In order to provide the best possible experience for new and existing users of Julia from the life-sciences. A little bit of structure and organization is necessary."
},

{
    "location": "policy/biojulia_organisation.html#The-package-ecosystem-and-Maintainers.-1",
    "page": "Community Organisation",
    "title": "The package ecosystem and Maintainers.",
    "category": "section",
    "text": "The BioJulia software ecosystem, around which the BioJulia community is based, consists of a growing number of individual packages.Each package is dedicated to introducing a specific data type or algorithm, or dealing with a specific biological problem or pipeline.Whilst there are some \"meta-packages\" such as Bio.jl, which bundle individual packages together for convenience of installation and use, most of the BioJulia software ecosystem is quite decentralized.Therefore, it made sense that maintainership of the packages should also be fairly decentralized, to achieve this, we created the role of a \"Dedicated Maintainer\", and have a Maintainers team."
},

{
    "location": "policy/biojulia_organisation.html#dedicated_maintainers-1",
    "page": "Community Organisation",
    "title": "Dedicated Maintainers",
    "category": "section",
    "text": "Packages have at least one \"Dedicated Maintainer\" who has admin access to the package. Typically this will be the original author of the package, when they contribute it to BioJulia. However, popular or larger packages may have multiple such dedicated maintainers. Dedicated maintainers may be recruited through on-boarding, and may leave their position through off-boarding.Dedicated maintainers are listed on their project's README file, andThe dedicated maintainer(s) will be responsible for the following for their package:Deciding the branching model used and how branches are protected.\nReviewing pull requests, and issues for that package.\nTo tag releases of a package at suitable points in the lifetime of the package.\nTo be the first contact for new contributors, community members and maintainers.\nTo uphold the BioJulia code of conduct, and report any incidents to a BioJulia admin member.Dedicated maintainers hold admin level access for any package(s) for which they are listed as a dedicated maintainer, and so new contributors to BioJulia should rest assured they will not be 'giving up' any package they decide to contribute, they shall remain that package's administrator.   "
},

{
    "location": "policy/biojulia_organisation.html#The-Maintainers-Team-1",
    "page": "Community Organisation",
    "title": "The Maintainers Team",
    "category": "section",
    "text": "All dedicated maintainers are added the the Maintainers team.Whilst, dedicated maintainers have admin access to specific packages, all maintainers in the Maintainers team have push access to all code packages in the BioJulia ecosystem.This allows for a community spirit where maintainers who are dedicated primarily to other packages may step in to help other maintainers to resolve a PR or issue. As such, newer maintainers and researchers contributing a package to the BioJulia ecosystem can rest assured help will always be at hand from our community.However, if you are a maintainer stepping in to help the dedicated maintainer(s) of another package, please respect them by first offering to step in and help resolve something, and secondly, by asking the Dedicated Maintainer before doing advanced and potentially destructive git operations e.g forcing pushes to branches (especially master), or re-writing history of branches."
},

{
    "location": "policy/biojulia_organisation.html#admin_members-1",
    "page": "Community Organisation",
    "title": "Administrators",
    "category": "section",
    "text": "BioJulia has a select group of members in an Admin team. This team has administrative access to all repositories in the BioJulia project.The administrators are expected to:Uphold the BioJulia code of conduct\nRespond to conduct breaches by enacting appropriate incident response.\nAct as mentors to all other BioJulia maintainers.\nAssist maintainers in upkeep of software packages when requested. Typically when harder tasks such as re-bases and history manipulation may be required.\nMaintain BioJulia infrastructure.Such members have often been contributing to BioJulia for a long time, and may even be founders present at the inception of the project. In order to become an admin, one does not necessarily have to contribute large amounts of code to the project. Rather the decision to on-board a member to an admin position depends on how long they have been using and contributing to BioJulia, and a positive interaction and involvement with the community,"
},

{
    "location": "policy/contributor_covenant.html#",
    "page": "Code of conduct",
    "title": "Code of conduct",
    "category": "page",
    "text": ""
},

{
    "location": "policy/contributor_covenant.html#conduct_code-1",
    "page": "Code of conduct",
    "title": "The BioJulia code of conduct",
    "category": "section",
    "text": "Like other software projects and communities, we have chosen to adopt the Contributor Covenant's code of conduct as a starting point.The version of the contributor covenant we adhere to is provided below."
},

{
    "location": "policy/contributor_covenant.html#Contributor-Covenant-Code-of-Conduct-1",
    "page": "Code of conduct",
    "title": "Contributor Covenant Code of Conduct",
    "category": "section",
    "text": ""
},

{
    "location": "policy/contributor_covenant.html#Our-Pledge-1",
    "page": "Code of conduct",
    "title": "Our Pledge",
    "category": "section",
    "text": "In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation."
},

{
    "location": "policy/contributor_covenant.html#Our-Standards-1",
    "page": "Code of conduct",
    "title": "Our Standards",
    "category": "section",
    "text": "Examples of behavior that contributes to creating a positive environment include:Using welcoming and inclusive language\nBeing respectful of differing viewpoints and experiences\nGracefully accepting constructive criticism\nFocusing on what is best for the community\nShowing empathy towards other community membersExamples of unacceptable behavior by participants include:The use of sexualized language or imagery and unwelcome sexual attention oradvancesTrolling, insulting/derogatory comments, and personal or political attacks\nPublic or private harassment\nPublishing others' private information, such as a physical or electronic address, without explicit permission\nOther conduct which could reasonably be considered inappropriate in a professional setting"
},

{
    "location": "policy/contributor_covenant.html#Our-Responsibilities-1",
    "page": "Code of conduct",
    "title": "Our Responsibilities",
    "category": "section",
    "text": "BioJulia maintainers and administrators are responsible for clarifying the standards of acceptable behavior, and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.BioJulia administrators have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.Please refer to the incident response Procedure that administrators are expected to adhere to, to see how incidents will be handled."
},

{
    "location": "policy/contributor_covenant.html#Scope-1",
    "page": "Code of conduct",
    "title": "Scope",
    "category": "section",
    "text": "This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers."
},

{
    "location": "policy/contributor_covenant.html#Enforcement-1",
    "page": "Code of conduct",
    "title": "Enforcement",
    "category": "section",
    "text": "Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the dedicated maintainer of a BioJulia package. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of the specific enforcement policies are posted in the incident response policy.Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership."
},

{
    "location": "policy/contributor_covenant.html#Attribution-1",
    "page": "Code of conduct",
    "title": "Attribution",
    "category": "section",
    "text": "This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available here"
},

{
    "location": "policy/incident_response.html#",
    "page": "Incident Response",
    "title": "Incident Response",
    "category": "page",
    "text": ""
},

{
    "location": "policy/incident_response.html#incident_response-1",
    "page": "Incident Response",
    "title": "Incident Response",
    "category": "section",
    "text": "If a member, or maintainer, of BioJulia breaks the code of conduct, and you are the target of harassing or otherwise bad behaviour, you may immediately report the incident to one of the admin maintainers of BioJulia.When making a report to admin, you should be as descriptive as possible, and be as objective as possible to help the admin responsibly handle the incident. Be accurate in your report as to the actual events, if possible, collect screen shots and other lines of evidence which cannot be denied."
},

{
    "location": "policy/incident_response.html#Example-report-1",
    "page": "Incident Response",
    "title": "Example report",
    "category": "section",
    "text": "Reported by: Mike\nWho: Chris G (@creepius, creepius@hotmail.com)\nWhen: October 2015\nWhat Happened: Chris made an inappropriate comment and made _ad hominem_insults to other member's intelligence during what was previously a technical discussion.Additional Context: NA\nOngoing: NoThe admin members must make an email address available to the BioJulia community members, through which they can be contacted. Report the incident to the admin members. They will keep a a copy of your report confidential."
},

{
    "location": "policy/incident_response.html#Responding-to-reports-1",
    "page": "Incident Response",
    "title": "Responding to reports",
    "category": "section",
    "text": "When responding to a report, an admin will:State they have recieved a report of a code of conduct issue.\nState when and where it happened.\nGive a general description of what happened (The name of the reporter must not be revealed).\nState the consequences.\nState what is expected of the person now.When responding to reports, admins pledge to:Focus on recording the details, and not on their individual judgement.\nRecord what they're hearing from the people affected.\nRecord it.\nAssume reports are credible."
},

{
    "location": "policy/incident_response.html#Judging-the-risk-and-impact-of-incidents-1",
    "page": "Incident Response",
    "title": "Judging the risk and impact of incidents",
    "category": "section",
    "text": "When deciding on the severity of a report, an admin must consider:How many people are affected?\nWas this in public or private?\nAre there any spill over effects.When deciding the risk associated with a report, and admin must consider:Medical or legal requirements.\nRepeat offenders.\nHow dangerous is it for the incident to happen again.The following example table can be used to asses the risk and impact of incidents:Impact Low Risk High Risk\nLow Impact Inappropriate jokes made in private Member has previous reputation for online harassment\nHigh Impact Constant inappropriate jokes Persistent co-ordinated harassment"
},

{
    "location": "policy/incident_response.html#Determining-the-response-to-an-incident.-1",
    "page": "Incident Response",
    "title": "Determining the response to an incident.",
    "category": "section",
    "text": "Admins may use the following example table to help them decide on the appropriate action to take following an incident report.Impact Low Risk High Risk\nLow Impact Verbal warning Take notes and follow up later\nHigh Impact Public apology Co-Ordinated whole team response: Removal of member from pages and positions of responsibility. Possible block from group entirely.As stated in the off-boarding guidelines, if a member with a degree of responsibility and administrative privileges is reported as breaching code of conduct, they may be off-boarded immediately without the required notification period. This is to prevent the offending individual from abusing their position and retaliating against anyone they think made a report. When a conduct breach incident is resolved, if the accused is to remain a BioJulia member, then the precautionary off-boarding can be reversed. If the consequence of a conduct breach is expulsion from BioJulia, then the off-boarding will not be reversed."
},

{
    "location": "policy/incident_response.html#Following-up-after-acting-on-an-incident-1",
    "page": "Incident Response",
    "title": "Following up after acting on an incident",
    "category": "section",
    "text": "Following an incident, after the admin has issued appropriate action, they must follow up with the individual(s) that made the report. This means letting the affected individual that made the report know the following:Was a code of conduct breach found.\nWhat was the response of the admin (e.g. reprimand, or more severe consequence.).\nWhether they are satisfied with the outcome of the process.\nAnything further that needs to be discussed."
},

{
    "location": "policy/code_style.html#",
    "page": "Code Style",
    "title": "Code Style",
    "category": "page",
    "text": ""
},

{
    "location": "policy/code_style.html#Style-requirements-for-code-1",
    "page": "Code Style",
    "title": "Style requirements for code",
    "category": "section",
    "text": "Source code files should have the following style of header:\n# Title\n# =====\n#\n# Short description.\n#\n# [Long description (optional)]\n#\n# This file is a part of BioJulia. License is MIT: <link to the license file>\nIndent with 4 spaces.\nWhen returning values from a function, use an explicit return statement. Be aware that functions in julia return the the result of the last statement in the function.\nType names are camel case, with the first letter capitalized. E.g. SomeVeryUsefulType.\nModule names are also camel case.\nFunction names, apart from constructors, are all lowercase. Include underscores between words only if the name would be hard to read without. E.g.  start, stop, findletter find_last_digit.\nGenerally try to keep lines below 80-columns, unless splitting a long line onto multiple lines makes it harder to read.\nFiles that declare modules should only declare the module, and import any modules that it requires. Any code should be included from separate files. E.g.module AwesomeFeatures\n\nusing IntervalsTrees, JSON\n\ninclude(\"feature1.jl\")\ninclude(\"feature2.jl\")\n\nendFiles that declare modules should have the same name name of the module. E.g the module SomeModule is declared under the file SomeModule.jl.\nSeparate logical blocks of code with one blank line, or two blank lines for function/type definitions.\nWhen extending method definitions, define the methods with a module name prefix. E.g.function Base.start(iter::YourType)\n  ...\nend\n\nBase.done(iter::YourType, state) = ...Document functions using bare docstrings before a definition:\"This function foo's something\"\nfoo(x) = 2 * xFunctions that get or set variables in a struct should not be prefixed with 'get' or 'set'. The getter should be named for the variable it gets, and the setter should have the same name as the getter, with the suffix !. For example, for the variable names:name(node) # get node name\nname!(node, \"somename\") # set node nameWhen using conditional branching, if code is statement-like, an if-else block should be used. However if the code is expression-like then julia's ternary operator should be used.matches == sketchlen ? (return 1.0) : return matches / (2 * sketchlen - matches)\n\n#The above code is more statement-like, with two return statements\n#and so is more readable as a if-else block:\n\nif matches == sketchlin\n    return 1.0\nelse\n    return matches / (2 * sketchlen - matches)\nend\n\n#However,\n\nx == y ? '|' : ' '\n\n#Returns one of two expression values; it is more expression-like\n#and so using a ternary operator is perfectly readable, and is\n#aceptable in BioJulia code."
},

{
    "location": "policy/package_requirements.html#",
    "page": "Package Requirements",
    "title": "Package Requirements",
    "category": "page",
    "text": ""
},

{
    "location": "policy/package_requirements.html#BioJulia-package-guidelines-1",
    "page": "Package Requirements",
    "title": "BioJulia package guidelines",
    "category": "section",
    "text": "All code in all packages in the BioJulia ecosystem should follow the BioJulia code style guide."
},

{
    "location": "policy/package_requirements.html#Documentation-1",
    "page": "Package Requirements",
    "title": "Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "policy/package_requirements.html#Docstrings-1",
    "page": "Package Requirements",
    "title": "Docstrings",
    "category": "section",
    "text": "Types and functions must be documented using Julia's docstrings.Documentation regarding specific implementation details that aren't relevant to users should be in the form of comments.Documentation may be omitted if the function is not exported (i.e. only used internally) and is short and obvious. E.g. cube(x) = x^3.However, please consider that what may be obvious to you as the write of the code, may not be obvious to others. Therefore, we do recommend documenting as much as possible, to help out fellow julia coders and biologists when they are reading and understanding the code. We are trying to make BioJulia packages as easy as possible to use, understand, and code with for everyone :)"
},

{
    "location": "policy/package_requirements.html#Documenter.jl-generated-manuals-and-documentation-1",
    "page": "Package Requirements",
    "title": "Documenter.jl generated manuals and documentation",
    "category": "section",
    "text": "In addition to documenting code in the source files through docstrings, we encourage contributers to create documentation which is more akin to a manual, complete with comprehensive explanations and examples of how to use the package.We use Documenter.jl and mkdocs, to generate such documentation and host it on the web. The source markdown files for such manuals are kept in the docs/src/man folder of each BioJulia package/repository."
},

{
    "location": "policy/package_requirements.html#Tests-1",
    "page": "Package Requirements",
    "title": "Tests",
    "category": "section",
    "text": "All significant code must be tested. Tests should be organized into contexts, and into separate files based on module.Files for tests for a module go into an appropriately named folder, within the test folder in the git repo."
},

{
    "location": "policy/package_requirements.html#Version-compatibility-1",
    "page": "Package Requirements",
    "title": "Version compatibility",
    "category": "section",
    "text": "All code contributed should be compatible with the latest stable version of Julia.If your contribution to a BioJulia package introduces a method which is shared among submodules, they should be declared in the top level module, and then extended by the submodules. For example, in Bio.jl, the method seqname was defined in Bio.Seq and overloaded by Bio.Intervals and Bio.Align. Therefore the declaration of the method was moved to Bio, and the three submodules extend the declared method."
},

{
    "location": "policy/pull_requests.html#",
    "page": "Pull Requests",
    "title": "Pull Requests",
    "category": "page",
    "text": ""
},

{
    "location": "policy/pull_requests.html#Contribute-by-pull-requests-1",
    "page": "Pull Requests",
    "title": "Contribute by pull requests",
    "category": "section",
    "text": "Conributions of code and documentation to existing BioJulia repositories take the form of pull requests (PR's).Before you start to work on your fix or addition to a BioJulia repository we recommend that you make your pull request early. This allows better collaboration with others, exchange of ideas, more code contributions from others (taking the pressure off you!), and better overall code as a result.The first thing all developers should do when making a PR is create themselves a fork of the BioJulia repository they want to contribute to, and then create a branch on that fork for the PR. This keeps the number of branches on the BioJulia repositories manageable and limited to release branches, and branches for major milestones involving work from many contributors. All developers, even those with push and pull access to BioJulia repositories, should follow this guidance."
},

{
    "location": "policy/pull_requests.html#The-BioJulia-Pull-Request-lifecycle-1",
    "page": "Pull Requests",
    "title": "The BioJulia Pull Request lifecycle",
    "category": "section",
    "text": "Pull Requests on BioJulia repositories go through several stages, and these stages are indicated by the following labels. Please use these labels to help let others know how far your are along with your work.stage: planing: You're planning. Figuring out the best way to code something or discussing ideas.\nstage: WIP: You're coding or writing, actively working on it.\nstage: RTR: You're finished, and want others to review the work and see if it is ready to be accepted and merged into BioJulia."
},

{
    "location": "policy/pull_requests.html#The-BioJulia-Pull-Request-review-1",
    "page": "Pull Requests",
    "title": "The BioJulia Pull Request review",
    "category": "section",
    "text": "Once the pull request enters the RTR (ready to review) stage, other members of the BioJulia organisation, will review the code and documentation in the pull request, and will assess it according to the BioJulia code and package guidelines.Your pull request will be accepted and merged if:Two reviewers subsequently recommend the pull request for merging.\nThe automated build system confirms that all unit tests pass without failiure."
},

{
    "location": "policy/off_boarding.html#",
    "page": "Off-boarding",
    "title": "Off-boarding",
    "category": "page",
    "text": ""
},

{
    "location": "policy/off_boarding.html#off_boarding-1",
    "page": "Off-boarding",
    "title": "The BioJulia off-boarding process",
    "category": "section",
    "text": "The BioJulia off-boarding process is designed to prevent security risks and confusion for the people who are maintaining the BioJulia community at any given time.It describes how maintainers (people in the BioJulia community with permissions and responsibility) are relieved of such a position if they find they are unable to fulfill the role, or who become inactive for a significant period of time."
},

{
    "location": "policy/off_boarding.html#Definition:-an-inactive-maintainer-1",
    "page": "Off-boarding",
    "title": "Definition: an inactive maintainer",
    "category": "section",
    "text": "We define inactivity is defined as a noticeable lack of:Commits\nComments and resolution of Pull Requests\nA lack of activity on Gitter or other any such BioJulia forums.Without any prior notification, for 2 months. Reduced activity during a period of 2 months does not constitute inactivity."
},

{
    "location": "policy/off_boarding.html#The-off-boarding-process-1",
    "page": "Off-boarding",
    "title": "The off-boarding process",
    "category": "section",
    "text": "The off-boarding process of a member begins when either:A maintainer opts to off-board.\nWhen an inactive member is brought to the attention of admin maintainers.\nAny maintainer consistently breaks community code of conduct, or any other BioJulia guidelines.The process proceeds as follows.The admin open an issue at BioJulia/Community-Issues.\nIt it titled \"Off-boarding notice: [NAME OF MAINTAINER]\".\nIt has a label \"off-boarding\" attached.\nIt should also state this off-boarding notice will be displayed without furthur action for a month.\nThe admin must also send an email to the maintainer in question notifying them that an off-boarding notice has been posted. This email should explain the reason for the off-boarding notice: Whether it is because of inactivity, or due to breaches of code of conduct.\nAs per guidance in step 1.4, the notice is open for a period of 1 month without subsequent action.\nDuring this time, the maintainer may reply and point out if they have actually been active, and if so where. They may also put forward a case if they feel they have not broken code of conduct.\nThey may also contact an admin privately if their absence has been due to personal circumstances. In this case the admin must be sympathetic, and helpful to the individual, and must treat anything they are told as confidential. The admin must discuss with the individual what they want to happen, and how they (the admin) can help.\nAfter a month, if nothing is heard from the inactive maintainer:\nThey are removed from the maintainer's group.\nAdmin or write access to repositories they maintained\nThey are placed into the Member's group.\nThey are added to the Alumni group in recognition of their time spent as a maintainer.\nTheir role description will be changed on their member profile at biojulia.netThere are two situations in which off-boarding can be applied immediately:A member voluntarily requests off-boarding for themselves. In which case step 1 still occurs, with the exception that a move to step 4 immediately occurs without the notification period.\nIf a member with a degree of responsibility and administrative privileges is the offender, they may be off-boarded immediately, without the required notification period. This is to prevent the offending individual from abusing their position and retaliating against anyone they think made a report. When a conduct breach incident is resolved, if the accused is to remain a BioJulia member, then the precautionary off-boarding can be reversed. If the consequence of a conduct breach is expulsion from BioJulia, then of course the off-boarding will not be reversed.The most important point: _It is to be understood, off-boarding as a result of inactivity, does not constitute a rejection of the member from the group, and that off-boarding is completely reversible. We all have busy periods in our lives. A member may join, contribute, become inactive for a long period of time, before getting more time and holding their old maintainer position again - they are always welcome. Off-boarding is only in place in order to prevent unnessecery levels of permissions which could pose a security risk._"
},

]}
