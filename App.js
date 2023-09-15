import { StatusBar } from 'expo-status-bar';
import { Dimensions,Animated,FlatList, Image, StyleSheet, Text, View } from 'react-native';
const {width,height}=Dimensions.get('screen')
import React from 'react'

//https://www.youtube.com/watch?v=gOj4BlzYF4A&list=PLQocKVqyqZDSCyzTX6QYZ5k5GBv4_TvAX&index=9

const data=[
  // require('./assets/anc1.jpg'),
  // require('./assets/anc2.jpg'),
  // require('./assets/anc3.jpg'),
  // require('./assets/anc4.jpg'),
  // require('./assets/anc5.jpg'),
  'https://scontent.frgn4-1.fna.fbcdn.net/v/t31.18172-8/29662646_1361697053934755_5959204971668553839_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF8oH5L1ns5HpdCXR3do7P6y9TCrBvWY__L1MKsG9Zj_7fcmuK-wp4NnVJ3LdLKXFVikGSeq8Br70guZkt6n6Uw&_nc_ohc=uJzH3o0wQ_EAX9YlHbm&_nc_ht=scontent.frgn4-1.fna&oh=00_AfDRfhTU6i1342wj-stJR4C4y9GSz7PrudFfuZMFqedcFQ&oe=652B7661',
  'https://scontent.frgn4-1.fna.fbcdn.net/v/t1.6435-9/46882550_1658701797567611_4054270220561285120_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHmvnSo8HE90sj58DeBzWEVyWo1wCsEL3LJajXAKwQvctm24vSwV3GQW9aHej4ONzSflRzOhtboZDqG9y3alKiZ&_nc_ohc=vPiJdvH5i3cAX8kBIyF&_nc_ht=scontent.frgn4-1.fna&oh=00_AfAUawNxysUCUxovpXflsOaiIhnAvZTv-jyW4WWuAryRCA&oe=652B8683',
  'https://scontent.frgn4-1.fna.fbcdn.net/v/t1.6435-9/80418693_2295654310539020_6366733874617122816_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGXp7Hb2i2Wd40G3u95g8yoOI1UlnfyGC44jVSWd_IYLsyBoO63K-29OFilYtTjdg7RSMvFCvfo5zJxjUgnPw4l&_nc_ohc=b-BDESxDDGYAX8N5e2h&_nc_ht=scontent.frgn4-1.fna&oh=00_AfB34VrpSnOt-7paIBOyHaydmcnspn_W0UiAXS4dTPGopg&oe=652B7590',
  'https://scontent.frgn4-1.fna.fbcdn.net/v/t31.18172-8/27747867_1320915808012880_3002414576014023466_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEdNMkbxnAJ_3F1kC1SjLLq_QeXdhasq6b9B5d2Fqyrpq8yLgd6eBIEweob1Wa_r0jXKjT2GwYi4pN22HhrW6Rw&_nc_ohc=SmQHqHs3E1AAX_h1MoX&_nc_ht=scontent.frgn4-1.fna&oh=00_AfBOJtGDc8Qq4mj27iv-hU1z3C0XLVJO4hurrMV8oDcNdg&oe=652B7618',
  'https://scontent.frgn4-1.fna.fbcdn.net/v/t31.18172-8/23736358_1250131235091338_5045549020234770861_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHiWTYnzQ0AThEYURH-_4iCPWkpRbYigGU9aSlFtiKAZT70KkF7TWK9jRDuZqKCTW0fkdnKV6O6T6MSxTkKySVj&_nc_ohc=5qVJ-lm8tv4AX-UZCgI&_nc_ht=scontent.frgn4-1.fna&oh=00_AfBNz-yrBdqZxrdTWh_RZnEiuePzOgYmZiU0xyTN1_ut4g&oe=652B70B4'
];

const imageW=width*0.7;
const imageH=height*0.5;

export default function App() {
  const scrollx=React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((image,index)=>{
          const inputRange=[
            (index-1)*width,
            index*width,
            (index+1)*width
          ]
          const opacity=scrollx.interpolate({
            inputRange,
            outputRange:[0,1,0]
          })
          return(
            <Animated.Image
              key={`image-${index}`}
              source={{uri:image}}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity
                }
              ]}
              blurRadius={5}
            />
          )
        })}
      </View>
      {/* <View style={{marginTop:40}}> */}
        <Animated.FlatList
          data={data}
          horizontal
          pagingEnabled
          keyExtractor={(_,index)=>index.toString()}
          renderItem={({item})=>{
            return (
              <View style={{width,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:item}} style={{
                  width:imageW,
                  height:imageH,
                  resizeMode:'cover',
                  borderRadius:17
                }}/>
              </View>
            )
          }}
        />
      {/* </View> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
