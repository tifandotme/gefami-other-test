# gefami-other-test

## Changes on `testdebug.html`

[Diff](https://github.com/tifandotme/gefami-other-test/commit/154b6c15cd5afc29ffcec7a102d9dad1ef0a21ce)

1. Added missing comma after the second object in the `attributes` array
2. Fixed missing closing quote in the `case.life[0].product[0].benefit[10].amount` object
3. Added a default value for the empty `valueAsString` in the `case.life[0].product[0].benefit[12].amount` object
4. Fixed the `compareDeep` function where it was checking `tmpStra >= 5` instead of `tmpStra.length >= 5`
5. Added null checking for regex matches in both comparison functions
6. In `compareDeep2` function:
   - Fixed the typo where `tmpStrb` was incorrectly accessed as `b.attributes` instead of `b.attribute`
   - Added proper array index access with `cleanA[i]` instead of `cleanA[]`
   - Fixed the final return statement to properly compare strings
   - Added handling for when both arrays of indices are null
7. Added output to the page to indicate when sorting is complete
