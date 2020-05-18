import AdComponent from "discourse/plugins/discourse-adplugin/discourse/components/ad-component";
import discourseComputed from "discourse-common/utils/decorators";

const serve_id = Discourse.SiteSettings.revive_serve_id;
const zone_id = Discourse.SiteSettings.revive_zone_id;
const placement = Discourse.SiteSettings.revive_placement;

Discourse.SiteSettings.discourse_enable_cors = true;
Discourse.SiteSettings.discourse_cors_origin = "*";
console.log("revive", Discourse.SiteSettings);
console.log("revive-ad zoneid", zone_id);
export default AdComponent.extend({
  init() {
    this.set("serve_id", serve_id);
    this.set("zone_id", zone_id);
    this._super();
    console.log("revive ads: ", Discourse);
  },

  @discourseComputed("serve_id")
  url(serveId) {
    return `//srv.csavr.com/www/delivery/asyncjs.php`.htmlSafe();
  },

  @discourseComputed("zone_id")
  zone(zoneId) {
    return 62;
  },

  @discourseComputed("currentUser.trust_level")
  showToTrustLevel(trustLevel) {
    return !(
      trustLevel &&
      trustLevel > Discourse.SiteSettings.revive_through_trust_level
    );
  },

  @discourseComputed("showToTrustLevel", "showToGroups", "showOnCurrentPage")
  showAd(showToTrustLevel, showToGroups, showOnCurrentPage) {
    return (
      placement &&
      serve_id &&
      showToTrustLevel &&
      showToGroups &&
      showOnCurrentPage
    );
  },
});
