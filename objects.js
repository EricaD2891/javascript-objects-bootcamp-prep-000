
var playlist ={BillieEilish: "ocean eyes"}
function updatePlaylist(playlist, Kiiara, Feels){
  playlist[Kiiara]=Feels
  return playlist
}
function removeFromPlaylist(playlist, BillieEilish){
  delete playlist.BillieEilish
  return playlist
}