import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const Alert = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/coco.png' style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
              <Dropdown.Item as='a'>News</Dropdown.Item>
                <Dropdown.Item as='a'>Coronavirus</Dropdown.Item>
                <Dropdown.Item as='a'>Entertainment</Dropdown.Item>
                <Dropdown.Item as='a'>Life</Dropdown.Item>
                <Dropdown.Item as='a'>Culture</Dropdown.Item>
                <Dropdown.Item as='a'>Travel</Dropdown.Item>
                <Dropdown.Item as='a'>Media</Dropdown.Item>
                <Dropdown.Item as='a'>Gallery</Dropdown.Item>
                <Dropdown.Item as='a'>Events</Dropdown.Item>
                <Dropdown.Item as='a'>Shopping</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

 

  
  </div>
)

export default Alert