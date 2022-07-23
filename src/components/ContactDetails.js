function ContactDetails(props) {
  return (
    <div>
          <table>             
              <tbody>
                  <tr>
                      <td><img className='pictureimg' src={props.pictureUrl} alt="" /></td>
                      <td>{props.name}</td>
                      <td>{props.popularity}</td>
                      <td>{props.wonOscar ? '🏆' : ''}</td>
                      <td>{props.wonEmmy ? '🏆' : ''}</td>
                  </tr>
              </tbody>
          </table>    
    
    </div>
  )
}

export default ContactDetails;
