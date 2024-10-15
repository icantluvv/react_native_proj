import React from 'react';
import { Pressable, Text, View } from 'react-native';

const LoadingSkeletonProfile = () => {
  return (
    <View className="w-full overflow-hidden h-screen flex flex-col items-center ">
      <View className="w-full flex flex-col mt-[32%] items-center">
        <View className="w-full flex justify-center">
          <View className="rounded-[50%] bg-skeleton w-[100px] h-[100px] animate-pulse"></View>
        </View>
        <View className="flex flex-col w-full items-center">
          <View className="w-full mt-[5px] flex justify-center">
            <View className="w-[40%] mt-[8px] h-[40px] bg-skeleton rounded-[24px] animate-pulse"></View>
          </View>

          <View className="w-[75%] mt-[0.5em] flex justify-center">
            <View className="w-[40%] mt-[8px] h-[40px] bg-skeleton rounded-[24px] animate-pulse"></View>
          </View>
        </View>
      </View>

      <View className="w-full mt-[1.5em] flex justify-center">
        <View className="w-[45%] flex justify-between">
          <Text className="text-[16px] select-none border-b-2 border-black">
            Мои места
          </Text>
          <Text className="text-[16px] select-none text-[#989898]">Отзывы</Text>
        </View>
      </View>

      <View className="w-full mt-[1.5em] bg-[#F9F9F9] h-screen flex justify-center">
        <View className="w-[94%] mt-[7%] bg-white rounded-[12px] p-5 flex flex-col items-center gap-y-6">
          <View className="flex flex-col w-full gap-y-3">
            <View className="w-full flex justify-between gap-x-4">
              <View className="w-[40px] h-[40px] bg-skeleton rounded-[50%] animate-pulse"></View>
              <View className="flex flex-col  flex-grow gap-y-1">
                <View className="h-[20px] bg-skeleton w-[100px] rounded-[50px] animate-pulse"></View>
                <View className="h-[12px] bg-skeleton w-[50px] rounded-[25px] animate-pulse "></View>
              </View>

              <View className="w-[40px] h-[40px] bg-skeleton rounded-[50%] animate-pulse"></View>
            </View>
            <View className="h-[30px]"></View>
          </View>

          <View className="flex w-full gap-x-2 justify-between">
            <View className="w-[31%] min-h-[172px] bg-skeleton rounded-[12px] animate-pulse"></View>
            <View className="w-[31%] min-h-[172px] bg-skeleton rounded-[12px] animate-pulse"></View>
            <View className="w-[31%] min-h-[172px] bg-skeleton rounded-[12px] animate-pulse"></View>
          </View>

          <Text className="w-full border-2 border-[#d9d9d9] text-[12px] font-semibold text-skeleton min-h-[48px] rounded-[10px] ">
            Подробнее
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoadingSkeletonProfile;
