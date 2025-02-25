import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardCheckbox,
    CardAction,
    CardAsset,
    CardTimer,
    CardContent,
    CardBadge,
    CardTitle,
    CardSubtitle,
  } from '@strapi/design-system';
import { Plus, Pencil, Trash } from '@strapi/icons';
import { MyButtonPicture } from "./MyButtonPicture";

const CardItem = () => {
    return (
        <Card style={{
            width: '240px'
          }} id="first">
              <CardHeader>
                <CardCheckbox />
                <CardAction position="end">
                  <MyButtonPicture picture={<Pencil/>}/>
                </CardAction>
                <CardAsset src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s'} />
                <CardTimer>05:39</CardTimer>
              </CardHeader>
              <CardBody>
                <CardContent>
                  <CardTitle>File name fezof hzoeah fohzeofhozaehfohzeoafhzoaehfohzaeo fhozahf ozaehfoa</CardTitle>
                  <CardSubtitle>PNG - 400✕400</CardSubtitle>
                </CardContent>
                <CardBadge>Doc</CardBadge>
              </CardBody>
        </Card>
    )
}

export {CardItem};