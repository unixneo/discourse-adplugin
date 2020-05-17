# The NOT Official Discourse Ad Plugin

This is the NOT official Discourse advertising plugin. It is a WIP by neo@unix.com for development.

### Cloned from original, official plugin (avoiding PR errors during WIP):

```
https://github.com/discourse/discourse-adplugin
```

**Authors**: [Sarah Ni](https://github.com/cyberkoi) & [Vi Nguyen](https://github.com/ladydanger) & [unixneo](https://github.com/unixneo)

**Version**: 1.2.6.18

**Contributors**: See the original repo (link above) for all the prior coders and team

**License**: MIT License

### REFACTOR: WIP

### Versions

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

- Debug CORS issues with Revive ad server (CORS in general)
- Remove hard coded paths dependant on name of plugi
- Debug logic issue with adsense on/off switch
- Remove hard coded paths dependant on name of plugin by original authors
- Fix CORS issue with house ads with script tags.
- Setting disable ads for carbon ads.
- Fix mobile house ads (currently not working properly).
- Disable ads for members setting for all ad types.
- Fix ad placement errors (poor placements) in CSS/HTML
