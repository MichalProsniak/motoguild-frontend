export default function RideParticipants(props) {
  var styles = { marginTop: "20px", display: "flex", flexWrap: "wrap" };

  return (
    <div className="ride-page-info" style={styles}>
      <div className="ride-page-info-header">Uczestnicy</div>

      {props.participants.map((member) => (
        <div key={member.id} className="ride-participants-list">
          <span key={member.id}>{member.userName}</span>
        </div>
      ))}
    </div>
  );
}
