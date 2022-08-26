import picture from '../images/piesek.jpg'
import Image from 'react-bootstrap/Image'
import { Rating } from 'react-simple-star-rating'

export default function GroupMemberForList(props)
{
    return (
        <div className='for-list'>
        
            <Image className='img fluid rounded-circle' style={{height: '60px', width: '60px', float: 'left'}} src={picture} />
            <Rating initialValue={props.member.rating} readonly={true} style={{float:'left'}} />
            <h3 style={{float:'center'}} >{props.member.userName}</h3>
            
        </div>
    )
}