import 'bootstrap/dist/css/bootstrap.min.css';
import './profileLeft.css'
import dummyDp from '../../assets/dummy-dp.png';

function ProfileLeft() {
  return (
    <>
    <section className="profile-left">
      <div>
        <img src={dummyDp} alt="" />
        <h4>Nameeeee0</h4>
        <p>active now</p>
      </div>
    </section>
    </>
  )
}
export default ProfileLeft;