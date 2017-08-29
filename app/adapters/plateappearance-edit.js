import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  save(store, type, record) {
    const api = this.get('host')
    const serialized = this.serialize(record, {includeID: true})
    const gameId = serialized.game_id
    const plateappearanceId = serialized.id
    const url = `${api}/games/${gameId}/plateappearances/${plateappearanceId}`
    const data = {plateappearance: serialized}
    return this.ajax(url, 'PUT', {data})
  }
});
