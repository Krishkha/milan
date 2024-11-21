import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontfamily from '../../../shared/Strings/Font'
import Colors from '../../../shared/Strings/Colors'

export default function TermConditiondrawer() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cancelation Policy</Text>
            <Text style={styles.text}>Our Cancellation Policy ensures transparency and flexibility for our valued users. Subscribers can cancel their premium membership at any time through the app's account settings. Upon cancellation, your premium features will remain active until the end of the current billing cycle, after which no further charges will be applied. Please note that payments are non-refundable, and partial refunds for unused time within a billing cycle are not provided. For trial memberships, cancellation must be completed at least 24 hours before the trial period ends to avoid automatic renewal. We encourage users to review their subscription details before making a purchase to ensure complete satisfaction.</Text>
            <Text style={styles.heading}>Terms & conditions</Text>
            <Text style={styles.text}>By using our dating app, you agree to comply with these Terms and Conditions, which govern your access and use of the platform. Users must be at least 18 years old to create an account. You are responsible for providing accurate information and maintaining the confidentiality of your account credentials. Our app strictly prohibits abusive, harmful, or inappropriate content, and we reserve the right to suspend or terminate accounts that violate these terms. The app is intended for personal, non-commercial use, and we do not guarantee successful matches or relationships. By accessing the app, you acknowledge that we may update these terms periodically, and continued use signifies your acceptance of any changes. For detailed information, please refer to our full Terms and Conditions available within the app or on our website.</Text>
            <Text style={styles.text}>By accessing and using our dating app, you agree to abide by these Terms and Conditions, designed to ensure a safe and enjoyable experience for all users. You must provide accurate, honest information during registration and refrain from engaging in fraudulent or harmful activities. Any misuse of the platform, including harassment, spamming, or sharing inappropriate content, is strictly prohibited and may result in account suspension or termination. The app is offered "as is," and while we strive to provide a seamless experience, we do not guarantee uninterrupted service or successful connections. By continuing to use the app, you accept these terms and acknowledge that updates or changes may be implemented periodically.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 20,
        paddingHorizontal: 10,
        gap: 10,
        backgroundColor: Colors.backgrcound1
    },
    heading: {
        fontFamily: Fontfamily.Urbanist600,
        color: Colors.text3,
        fontSize: 16,
    },
    text: {
        fontFamily: Fontfamily.Urbanist300,
        fontSize: 12,
        color: Colors.text3,
    }
})