import HouseAdsSetting from "../components/house-ads-setting";

export default HouseAdsSetting.extend({
  classNames: "house-ads-setting house-ads-list-setting",
  adNames: Ember.computed.mapBy("allAds", "name"),
});
