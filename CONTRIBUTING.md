# Project Structure / Contributing


Check open issues for a list of features/bugs that we would like to see
fixed/implemented.


## New Features / Bugs

The easiest way to add new features and fix bugs is to create a test file with
mixed input and use the [esprima parser
demo](http://esprima.org/demo/parse.html) to visualize the syntax tree and
implement each step separately.

A good example of a commit that fixes a bug:
https://github.com/millermedeiros/esformatter/commit/ebafa00f76



## How it works?

We augment the AST with
[rocambole](https://github.com/millermedeiros/rocambole), so every `node` have
[extra
properties](https://github.com/millermedeiros/rocambole#extra-properties) that
can be used to traverse the AST (similar to the DOM).

We are adding helper methods to the `lib/util` package (very similar to
jQuery) to make the process easier.

The recursion starts from the *leaf nodes* and moves till it reaches the
`Program` root. Each method exposed on `lib/hooks.js` is called once for each
matching `node`.

The whole process is very similar to working with the DOM. Don't feel
intimidated by *complex names* like `ConditionalExpressionConsequent`, use the
[esprima parser demo](http://esprima.org/demo/parse.html) as reference and you
should be good to go.



## Branches and Pull Requests

We will create `-wip` branches (work in progress) for *unfinished* features
(mostly because of failing tests) and try to keep master only with *stable*
code. We will try hard to not rewrite the commit history of `master` branch but
will do it for `-wip` branches.

If you plan to implement a new feature check the existing branches, I will push
all my local `-wip` branches if I don't complete the feature in the same day.
So that should give a good idea on what I'm currently working.

Try to split your pull requests into small chunks (separate features), that way
it is easier to review and merge. But feel free to do large refactors as well,
will be harder to merge but we can work it out. - see [issue-guidelines for
more info about good pull
requests](https://github.com/necolas/issue-guidelines/blob/master/CONTRIBUTING.md#pull-requests)



## Default Settings

The default settings should be as *conservative* as possible, [Google
JavaScript Style
Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
should be used as a reference.

We have plans to support other presets like
[Idiomatic.js](https://github.com/rwldrn/idiomatic.js/) and [jQuery Style
Guide](http://contribute.jquery.org/style-guide/js).



## Tests

Tests are done by comparing the result of `esformatter.parse()` of files with
name ending on `-in.js` with the files `-out.js`. The folder
`test/compare/default` tests the default settings and files inside
`test/compare/custom` tests custom settings. Tests inside the `compare/custom`
folder should try to test the *opposite* of the default settings whenever
possible.

To run the tests install the devDependencies by running `npm install --dev`
(only required once) and then run `npm test`.

`mocha` source code was edited to provide better error
messages. See [mocha/issues/710](https://github.com/visionmedia/mocha/pull/710)
for more info.

To check code coverage run `npm test --coverage`.

