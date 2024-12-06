import {
  Pressable,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  SafeAreaView
} from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { format } from 'date-fns'
import * as ImagePicker from 'expo-image-picker'
import { loadUserData, saveUserData } from './userData'
import RegisterUser from '@/api/register/Register'
import { useSession } from '@/components/ctx'
import { router } from 'expo-router'

export default function SignUpLoadData() {
  const [image, setImage] = useState<string | null>(null)
  const [pressed, setPressed] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [nickName, setNickName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState(new Date(946700000000))
  const [errorUserName, setErrorUserName] = useState<boolean>(false)
  const [errorNickName, setErrorNickName] = useState<boolean>(false)
  const [errorDate, setErrorDate] = useState<boolean>(false)
  const [formattedDate, setFormattedDate] = useState<string>('')
  const { signIn } = useSession()

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const onChangeDate = (event: any, selectedDate: any) => {
    if (selectedDate) {
      setDate(selectedDate)
      const formated = format(date, 'dd.MM.yyyy')
      setFormattedDate(formated)
    }
  }

  async function CreateUser() {
    const validate = await CheckData(
      userName,
      nickName,
      formattedDate,
      setErrorUserName,
      setErrorNickName,
      setErrorDate
    )

    if (validate) {
      const load = await loadUserData()
      const response = await RegisterUser(
        load.email,
        load.password,
        formattedDate,
        nickName,
        userName,
        image
      )
      if (response) {
        await signIn(response)
        router.push('/')
      }
    }
    return Error
  }

  return (
    <SafeAreaView className="bg-white h-screen justify-between">
      <StatusBar barStyle="dark-content"></StatusBar>

      <View className="justify-between h-[84vh] px-[5%]">
        <View className={'items-center w-full '}>
          <Pressable
            onPress={pickImage}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            className="w-[100px] h-[100px] my-[5vh] border border-lightGray rounded-[50px] relative"
          >
            {image ? (
              <Image
                source={{ uri: image }}
                className={`w-[100%] h-[100%] rounded-[50px] ${pressed ? 'opacity-50' : 'opacity-100'}`}
                style={{ objectFit: 'cover' }}
              ></Image>
            ) : (
              <Image
                className={`w-[100%] rounded-[50px] ${pressed ? 'opacity-50' : 'opacity-100'} h-[90%] `}
                source={require('../../../assets/images/pick_photo.png')}
              ></Image>
            )}

            <Image
              source={require('../../../assets/images/AddPhotoButton.png')}
              className={`rounded-[22px] w-[44px] h-[44px] right-0 absolute bottom-[-20%]`}
            ></Image>
          </Pressable>

          <View className="gap-y-4 w-full">
            <View>
              <Text className="font-bold text-[12px]">Имя</Text>
              <TextInput
                onChangeText={(text) => setUserName(text)}
                value={userName}
                placeholder="ActNow"
                className={`p-4 placeholder:text-shadowText mt-[5px] ${errorUserName ? 'border-red-500' : ' border-hoverButton'} border rounded-[12px]  `}
              ></TextInput>
            </View>

            <View>
              <Text className="font-bold text-[12px]">Ник</Text>
              <TextInput
                value={nickName}
                onChangeText={(text) => setNickName(text)}
                placeholder="@3actnow"
                className={`p-4 placeholder:text-shadowText mt-[5px] ${errorNickName ? 'border-red-500' : ' border-hoverButton'} rounded-[12px] border `}
              ></TextInput>
            </View>

            <View className="gap-2">
              <Text className="font-bold text-[12px]">Дата рождения</Text>
              <View className="justify-center relative">
                <TextInput
                  editable={false}
                  className={`p-4 text-transparent  rounded-[12px] border ${errorDate ? 'border-red-500' : ' border-hoverButton'}  `}
                />
                <View className="absolute left-[-10] z-[2000]">
                  <DateTimePicker
                    className="w-full"
                    testID="dateTimePicker"
                    value={date}
                    onChange={onChangeDate}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text className="font-bold text-[12px]">Описание профиля</Text>
              <TextInput
                multiline={true}
                value={description}
                onChangeText={(text) => setDescription(text)}
                placeholder="Вы можете быть предпринимателем или профессионалом в своем деле. В таком случае вам  необходимо призывающее к действию описание профиля"
                className={`p-4 placeholder:text-shadowText mt-[5px] min-h-[30px] max-h-[150px] rounded-[12px] border border-hoverButton `}
              ></TextInput>
            </View>
          </View>
        </View>
        <View className="w-full">
          <Pressable
            className="bg-[#171717] active:bg-activeBlackButton h-[48px] mt-[7%] rounded-[12px] justify-center items-center"
            onPress={() => {
              CreateUser()
            }}
          >
            <Text className="font-medium text-white">Войти</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

async function CheckData(
  userName: string,
  nickName: string,
  formattedDate: string,
  setErrorUserName: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorNickName: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorDate: React.Dispatch<React.SetStateAction<boolean>>
) {
  setErrorUserName(false)
  setErrorNickName(false)
  setErrorDate(false)

  if (userName == '') {
    setErrorUserName(true)
    return false
  }

  if (nickName == '') {
    setErrorNickName(true)
    return false
  }

  if (formattedDate == '') {
    setErrorDate(true)
    return false
  }

  return true
}
