import { AdMobBanner } from "expo-ads-admob"
import { View, Platform, StyleSheet } from "react-native"

const BannerAd = () => {
  const BANNER_AD_ID_iOS = "ca-app-pub-6231044358869724/9367965772"
  const BANNER_AD_ID_ANDROID = "ca-app-pub-6231044358869724/8746779551"
//   const bannerId = Platform.OS === "ios" ? BANNER_AD_ID_iOS : BANNER_AD_ID_ANDROID
  const adUnitID = Platform.select({
    ios: BANNER_AD_ID_iOS,
    android: BANNER_AD_ID_ANDROID,
  })

  return (
    <View style={myStyles.container}>
      <AdMobBanner
        bannerSize="banner"
        adUnitID={adUnitID}
        serverPersonalizedAds={false}
      />
    </View>
  )
}

const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default BannerAd
