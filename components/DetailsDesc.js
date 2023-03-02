import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'

import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 150))
    const [readMore, setReadMore] = useState(false)
    return (
        <>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} >
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <EthPrice price={data.price} />
            </View>
            <View style={{
                marginVertical: SIZES.extraLarge * 1.5
            }}>
                <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary
                }}>Description</Text>
                <View style={{ marginTop: SIZES.base }}>
                    <Text style={{
                        fontSize: SIZES.small,
                        fontFamily: FONTS.regular,
                        color: COLORS.secondary,
                        lineHeight: SIZES.large
                    }}
                        onPress={() => {
                            if (readMore) {
                                setText(data.description.slice(0, 150))
                                setReadMore(false)
                                return
                            }
                            setText(data.description)
                            setReadMore(true)
                        }
                        }
                    >
                        {text}
                        {!readMore && '...'}
                        <Text style={{
                            fontSize: SIZES.small,
                            fontFamily: FONTS.semiBold,
                            color: COLORS.secondary,
                        }}
                        >
                            {readMore ? ' Voir moins ' : ' Voir Plus '}
                        </Text>
                    </Text>
                </View>
            </View>
        </>
    )
}

export default DetailsDesc