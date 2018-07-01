const express = require('express');
const router = express.Router();
const watson = require('watson-developer-cloud')

const conversation = new watson.ConversationV1({
    username: 'de1f6746-530d-432f-b78f-48d76111daf1',
    password: 'iIXvuaRH0RUP',
    version: '2018-02-16'
});

router.get('/', (req, res) => {
    console.log(req.body)

    conversation.message({
        workspace_id: '650c45b2-4c75-4b41-83ac-3a2ea3df844e',
        input: { 'text': 'hello' }
    }, function (err, response) {
        if (err)
            console.log('error:', err);
        else
            res.send({response});
    });
  });

  module.exports = router;
