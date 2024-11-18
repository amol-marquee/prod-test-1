module.exports = {
  "query_id": "f9750d5e-664a-4226-8e11-87db2e274ad2",
  "db_id": "694df37d-e692-40c8-9a12-34b7f8de86f5",
  "route": "/film_actor-test",
  "method": "GET",
  "query_json": {
    "schema": "public",
    "table": "film_actor",
    "method": "select",
    "table_alias": "film_actor",
    "where": {
      "condition": "AND",
      "id": "root",
      "rules": [],
      "not": false
    },
    "orderby_dynamic": false,
    "orderby_dynamic_columns": [],
    "limit_dynamic": false,
    "offset_dynamic": false,
    "offset": 0,
    "limit": 100,
    "columns": [
      {
        "columnName": "public.film_actor.actor_id",
        "alias": "actor_id",
        "label": "actor_id"
      },
      {
        "columnName": "public.film_actor.film_id",
        "alias": "film_id",
        "label": "film_id"
      },
      {
        "columnName": "public.film_actor.last_update",
        "alias": "last_update",
        "label": "last_update"
      }
    ],
    "joins": [],
    "orderby": [],
    "condition_count": 0
  },
  "sqlmethod": "select",
  "querypaths": [],
  "auth_required": false,
  "base": "15575134"
}