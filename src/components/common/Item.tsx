import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

interface ItemProps {
  icon?: any
  title?: string
  content: any
}

export const Item: React.FC<ItemProps> = ({
  icon = <SendIcon fontSize="small" color="primary" />,
  title,
  content,
}) => {
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>
        {title && <span style={{ fontWeight: 'bold' }}>{title} </span>}
        {content}
      </ListItemText>
    </ListItem>
  )
}
