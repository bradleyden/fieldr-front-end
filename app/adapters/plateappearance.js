import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    const api = this.get('host')
    const serialized = this.serialize(record, {includeID: true})
    console.log(serialized)
    const gameId = serialized.game_id
    const url = `${api}/games/${gameId}/plateappearances`
    const data = {plateappearance: serialized}
    return this.ajax(url, 'POST', {data})
  }
});
