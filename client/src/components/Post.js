import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Post = ({ id, user_id, title, img_url }) => (
  <Card>
    { img_url && <Image src={img_url} />}
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
  </Card>
)

export default Post
