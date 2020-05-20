# The NOT Official Discourse Revive Ad Server Plugin by Neo (WIP)

This is the NOT official Discourse ad plugin. It is a WIP by neo@unix.com for development.

This branch strips out all but "house ads" to use with external ad server (like revive, for example) and refines this for use with a single ad server.

### Cloned from original, official plugin (avoiding PR errors during WIP):

### Status: Problem with CORS in dev

```
https://github.com/discourse/discourse-adplugin
```

**Authors**: [Sarah Ni](https://github.com/cyberkoi) & [Vi Nguyen](https://github.com/ladydanger) & [unixneo](https://github.com/unixneo)

**Version**: 1.2.7.4.1

**Contributors**: See the original repo (link above) for all the prior coders and team

**License**: MIT License

### REFACTOR: WIP

### Notes

With version 1.2.7.4 can enter both mobile and desktop ads as house ads. Ads with 'mobile' in the name will be array filtered into the mobile ad array and those without will be filtered into the desktop ad array. This creates a small bug in the randomizer for the array index which needs to be fixed. Also, need to make ads a computed property so they will change without reload (mobile, desktop). This is a workaround since the Revive ad server does not support fully responsive ads.

### Version

- Version 1.2.7.4.0 19 May 2020, Added initial code for mobile ads
- Version 1.2.7.3 19 May 2020, Add "show to admins only" setting for live site testing
- Version 1.2.7.2 19 May 2020, Test and finish stripping non-house ads, set up dev scss for testing
- Version 1.2.7.1 19 May 2020, Strip non-house ad code, strip non-english locales
- Version 1.2.7.0 19 May 2020, Create branch for house ads only
- Version 1.2.6.19 18 May 2020, WIP: Debug CORS roadblock (site settings)
- Version 1.2.6.18 17 May 2020, WIP: Revive ad server component CORS roadblock
- Version 1.2.6.17 17 May 2020, WIP: Revive ad server component begin
- Version 1.2.6.16 17 May 2020, ADD: Settings, on/off switches and more (house, adsense, dfp)
- Version 1.2.6.14 17 May 2020, FIX: change repo name to discourse-adplugin (harded coded into plugin by original authors)
- Version 1.2.6.13 17 May 2020, FIX: ember registration conflict (2)
- Version 1.2.6.12 17 May 2020, WIP: debug ember registration conflict
- Version 1.2.6.11 17 May 2020, FIX: ember registration conflict
- Version 1.2.6.10 17 May 2020, ADD: Enable content security policy (experimental, not working yet)
- Version 1.2.6.9 17 May 2020, ADD: Disable house ads on mobile (mobile house ads broken)
- Version 1.2.6.8 16 May 2020, MOVE: Disable ads for members to top level settings
- Version 1.2.6.7 16 May 2020, ADD: Disable ads for members (adsense,dfp,codefund,amazon, adbutler, but not carbon ads)
- Version 1.2.6.6 16 May 2020, FIX: typos
- Version 1.2.6.5 16 May 2020, CLONED: Avoid accidential PR issues with orig plugin.
- Version 1.2.6.4 16 May 2020, FIX: topic-above-suggested placement CSS
- Version 1.2.6.3 16 May 2020, ADD: Disable house ads for members (overrides TLs).
- Version 1.2.6.2 16 May 2020, ADD: Trust levels for house ads.
- Version 1.2.6.1 16 May 2020, INIT: Remove cors, use iframe for now.
- Version 1.2.6.0 15 May 2020, INIT: Add site setting to enable / disable

### TODO

- Fix bug in house-ads.js regarding array indexing because of mobile tags.
- Make ads a computed property so they will change without reload (mobile, desktop).
- Debug CORS issues with Revive ad server (CORS in general).
- Remove hard coded paths dependant on name of plugin by original authors.
- Fix mobile house ads (currently not working properly).
- Delete dead CSS code for removed ad networks.
