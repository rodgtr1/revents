import React from 'react'
import {Segment, Item, List, Icon, Button} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = () => {
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header content='Content Title' />
                            <Item.Description>
                                Hosted by Bob
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> Date
                    <Icon name='marker' /> Venus
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                </List>
            </Segment>
            <Segment clearing>
                <div>Description of event</div>
                <Button color='teal' floated='right' content='view' />
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem