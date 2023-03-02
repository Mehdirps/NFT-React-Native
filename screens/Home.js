import React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { useState } from 'react';

import { COLORS, NFTData } from '../constants'
import { NFTCard, FocusedStatusBar, HomeHeader } from '../components'

const Home = () => {
    return (
        // Zone de sécurité d'affichage selon écran
        <SafeAreaView style={{ flex: 1 }}>
            {/* Barre de sécurité pour zone notification etc.. du téléphone */}
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    {/* Liste d'object */}
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
                {/* Background page d'accueil */}
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1
                }} >
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, height: 300, backgroundColor: COLORS.red }} />
                </View>
            </View>
        </SafeAreaView >
    );
};

export default Home;