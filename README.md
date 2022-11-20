# Who Wants to Be A Millionaire (RU) API
A simple API to retrieve questions of russian version of "Who Wants to Be A Millionaire" ("Кто хочет стать миллионером?") show.
## Production host
http://wwbm-ru-api.xyz
## API
### `GET /questions/{number}/{difficulty}`
`number` **(default : 1)** - number of questions to be returned. **(max: 5)**
`difficulty` **(default : 1)** 

Returns an array with `{number}` of `{difficulty}` questions e.g. `GET /questions/1/3`.
| Difficulty | Desctiption |
|--|--|
|1| To get jokingly easy question |
|2| To get question of middle difficulty |
|3| To get difficult question |
    [
     {
		 "qType": 3,
		 "question": "Что появилось благодаря Михаэлю Тонету?",
		 "varA": "венский стул",
		 "varB": "венский вальс",
		 "varC": "венский шницель",
		 "varD": "венский бал",
		 "correct": "A"
     }
    ]
## Response fields
 - `qType `- question difficulty
 - `varA `- Possible answer A
 - `varB` - Possible answer B
 - `varC` - Possible answer C
 - `varD` - Possible answer D
 - `correct` - Letter of correct answer
## Contributing
If you want to add some questions, just add them in `questionsEasy.js` ,  `questionsMiddle.js` ,  `questionsDifficult.js`   file and do a pull request !
## MIT License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
