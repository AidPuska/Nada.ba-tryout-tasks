import { View, Text, Image } from 'react-native'
import React from 'react'

const Component = () => {
  return (
    <View style={{flex: 1, padding: 20, gap: 10, position: 'relative', backgroundColor: 'white'}}>
      <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'black', paddingTop: 0 }}>
        <Image style={{ width: 30, height: 30 }} width={20} height={20} source={require("./assets/iconerrorbold.png")} />
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Image style={{ width: 30, height: 30 }} width={20} height={20} source={require("./assets/group-126.png")} />
          <Text style={{ fontWeight: '400', fontSize: 14, color: 'black' }}>20</Text>
        </View>
      </View>
      <Text style={{ color: 'black', fontSize: 24, fontFamily: 'Pangolin-Regular', fontWeight: '400', fontFamily: 'Pangolin-Regular' }}>Summer party museum </Text>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Text style={{ backgroundColor: '#F1F5F9', padding: 15, borderRadius: 15, color: 'black', fontFamily: 'Pangolin-Regular' }}>Party</Text>
        <Text style={{ backgroundColor: '#F1F5F9', padding: 15, borderRadius: 15, color: 'black', fontFamily: 'Pangolin-Regular' }}>Drinks</Text>
        <Text style={{ backgroundColor: '#F1F5F9', padding: 15, borderRadius: 15, color: 'black', fontFamily: 'Pangolin-Regular' }}>Meet new people</Text>
        <Text style={{ backgroundColor: '#F1F5F9', padding: 15, borderRadius: 15, color: 'black', fontFamily: 'Pangolin-Regular' }}>Dance</Text>
      </View>

      <View style={{ gap: 5 }}>
        <Text style={{ fontWeight: '400', fontSize: 18, color: 'black', fontFamily: 'Pangolin-Regular' }}>Description</Text>
        <Text style={{ color: 'black', fontFamily: 'Pangolin-Regular' }}>Channeling traditional village fete vibes, Museum of the Home's Summer Party invites you and the kids onto its lush lawns, for a day of ...</Text>
      </View>

      <View style={{ marginTop: 15, flexDirection: 'row', gap: 5, alignItems: 'center', backgroundColor: '#F1F5F9', padding: 5, borderRadius: 10, width: 60, paddingVertical: 10 }}>
        <Image
          style={{ width: 32, height: 23.81 }}
          resizeMode="cover"
          source={require("./assets/iconpeoplebold.png")}
        />
        <Text style={{ color: 'black' }}>8</Text>
      </View>

      <View style={{ width: 343, height: 130, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Image
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          source={require("./assets/ellipse-45.png")}
        />
        <Image
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          source={require("./assets/ellipse-46.png")}
        />
        <Image
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          source={require("./assets/ellipse-47.png")}
        />
        <Image
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          source={require("./assets/ellipse-48.png")}
        />
        <Image
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          source={require("./assets/ellipse-49.png")}
        />
        <Image
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          source={require("./assets/ellipse-50.png")}
        />
        <Image
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          source={require("./assets/ellipse-51.png")}
        />
        <Image
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          source={require("./assets/ellipse-52.png")}
        />
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', gap: 5, alignItems: 'center', backgroundColor: '#F1F5F9', padding: 5, borderRadius: 10, width: 60, paddingVertical: 10 }}>
        <Image
          style={{ width: 32, height: 32 }}
          resizeMode="cover"
          source={require("./assets/iconcamerabold.png")}
        />
        <Text style={{ color: 'black' }}>5</Text>
      </View>

      <View style={{ width: "100%", height: 130, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Image
          style={{ width: 107, height: 78 }}
          resizeMode="cover"
          source={require("./assets/rectangle-82.png")}
        />
        <Image
          style={{ width: 107, height: 78 }}
          resizeMode="cover"
          source={require("./assets/rectangle-83.png")}
        />
        <Image
          style={{ width: 107, height: 78 }}
          resizeMode="cover"
          source={require("./assets/rectangle-84.png")}
        />
        <Image
          style={{ width: 107, height: 78 }}
          resizeMode="cover"
          source={require("./assets/rectangle-85.png")}
        />
        <Image
          style={{ width: 107, height: 78 }}
          resizeMode="cover"
          source={require("./assets/rectangle-86.png")}
        />
      </View>

      <View style={{position: 'absolute', left: 0,right: 0, bottom: 0, height: 107,backgroundColor: 'white', borderWidth: 1, justifyContent: 'center'}}>
        <View style={{}}>
          <View style={{backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', gap: 5, flexDirection: 'row', padding: 10, marginHorizontal: 10, borderRadius: 10}}>
            <Image
              style={{width: 14, height: 14}}
              resizeMode="cover"
              source={require("./assets/icons.png")}
            />
            <Text style={{color: 'white', fontFamily: 'Pangolin-Regular'}}>
              Invite others
            </Text>
          </View>
        </View>
      </View>

    </View>
  )
}

export default Component