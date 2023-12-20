import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { COLORS } from '../../utils/constants';

const LeftContent = props => <Avatar.Icon {...props} icon="shopping" />

export const Cards = ({title, image, price, description, category }) => {
    return(
        <Card style={{width:'100%',padding:'6px',fontFamily: 'Montserrat_400Bold'}}>
            <Card.Title title={title} subtitle={category} left={LeftContent} style={{fontFamily: 'Montserrat_400Bold'}} />
            <Card.Content>
            <Text variant="titleLarge" style={{fontFamily: 'Montserrat_400Bold',color: COLORS.primary, fontSize:'28px'}}>{title}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: image }} />
            <Text variant="bodyMedium" style={{fontFamily: 'Montserrat_400Bold'}}>{description}</Text>
            <Text variant="titleLarge" style={{fontFamily: 'Montserrat_400Bold', color:COLORS.green, fontSize:'30px', fontWeight:'900'}}>{price}</Text>
            <Card.Actions>
            {/* <Button>Cancel</Button>
            <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
    )
}