import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import useOrganizationStore from '@/store/organizationWidgetStore'

const NativeMap = ({ organizations }: OrganizationsProps) => {
  const setOrganization = useOrganizationStore((state) => state.setOrganization)

  const [region, setRegion] = useState({
    latitude: 47.227592,
    longitude: 39.71707,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  })

  const handleMarkerPress = (organization: Organization) => {
    setOrganization(organization)
  }

  return (
    <View className="w-full h-screen">
      <MapView
        className="w-full"
        style={styles.map}
        region={region}
        mapType="standard"
        onRegionChangeComplete={setRegion}
      >
        {organizations.map((org) => (
          <Marker
            key={org.id}
            coordinate={{
              latitude: org.latitude,
              longitude: org.longitude
            }}
            onPress={() => handleMarkerPress(org)}
          >
            <Image
              className="rounded-[35px] border-2 border-white w-[50px] h-[50px]"
              source={{ uri: org.photo }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  )
}

export default NativeMap

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  }
})
