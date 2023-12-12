import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="shopping" />

export const Cards = ({title, image, price, description, category }) => {
    return(
        <Card style={{width:'100%',padding:'6px'}}>
            <Card.Title title={title} subtitle={category} left={LeftContent} />
            <Card.Content>
            <Text variant="titleLarge">{title}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: image }} />
            <Text variant="bodyMedium">{description}</Text>
            <Text variant="titleLarge">{price}</Text>
            <Card.Actions>
            {/* <Button>Cancel</Button>
            <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
    )
}