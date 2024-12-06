import { View } from 'react-native'
import NativeMap from '@/components/mapPage/NativeMap'

export default function Index() {
  const organizations = [
    {
      id: 1,
      name: 'Ресторан №1',
      photo:
        'https://burobiz-a.akamaihd.net/uploads/images/89319/large_daeee133421353.56aa66febf6a7.jpg',
      max_discount: 20,
      common_discount: 10,
      description:
        'Мы ценим, что наши клиенты показывают свою лояльность через голс',
      goals: [{ id: 1, name: 'Цель 1' }],
      stories: [{ id: 1, title: 'История 1' }],
      users: [{ id: 1, name: 'Пользователь 1' }],
      latitude: 47.227592,
      longitude: 39.71707
    },
    {
      id: 2,
      name: 'Кофейня №2',
      photo:
        'https://burobiz-a.akamaihd.net/uploads/images/89319/large_daeee133421353.56aa66febf6a7.jpg',
      max_discount: 15,
      common_discount: 5,
      description:
        'Кофейня с уютной атмосферой и ароматным кофе. Отличное место для встреч с друзьями и работы.',
      goals: [{ id: 2, name: 'Цель 2' }],
      stories: [{ id: 2, title: 'История 2' }],
      users: [{ id: 2, name: 'Пользователь 2' }],
      latitude: 47.222531,
      longitude: 39.720785
    },
    {
      id: 3,
      name: 'Бар №3',
      photo:
        'https://burobiz-a.akamaihd.net/uploads/images/89319/large_daeee133421353.56aa66febf6a7.jpg',
      max_discount: 10,
      common_discount: 3,
      description:
        'Лучшее место для отдыха после работы. Бар с богатым выбором напитков.',
      goals: [{ id: 3, name: 'Цель 3' }],
      stories: [{ id: 3, title: 'История 3' }],
      users: [{ id: 3, name: 'Пользователь 3' }],
      latitude: 47.224021,
      longitude: 39.718123
    }
  ]

  return (
    <View className="w-full h-screen">
      <NativeMap organizations={organizations}></NativeMap>
    </View>
  )
}
