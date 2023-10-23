import './Avatar.scss';
import avatar from '../../assets/avatar.jpeg'

function Avatar() {
  return (
    <div className="cont-avatar">
        <img src={avatar} alt="" />
    </div>
  )
}

export { Avatar }
