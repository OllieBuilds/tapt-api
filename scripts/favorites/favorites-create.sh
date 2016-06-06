curl --include --request POST http://localhost:3000/favorites \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=hur2AF94riZQRoW1H7+PgFDHvrNw2LdE3ZUDWegqqg4=--HudyjPsjw2DJ1yUhu9N3EjoV7v9i6QFVE08MQVH7mr4=" \
  --data '{
        "id": 1,
        "name": "Beer",
        "abv": 6,
        "ibu": 72
  }'
