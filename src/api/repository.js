import filmography from '../json/filmografia_disciplina';
import memorial from '../json/recomendados_por_mim';

export const getHomeList = async () => {
    return [
        {
            slug: 'filmography',
            title: 'Filmografia da Disciplina',
            items: shuffle(filmography),
        },
        {
            slug: 'memorial',
            title: 'Memorial Autobiográfico',
            items: shuffle(memorial),
        }
    ]
}
// http://sedition.com/perl/javascript-fy.html
function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
