const languages = {
    en: {
        hero: {
            description: 'Full-stack developer with a focus on front-end and on JavaScript-based technologies.'
        }
    },
    pt: {
        hero: {
            description: 'Desenvolvedora full-stack com foco no front-end e em tecnologias baseadas em JavaScript.'
        }
    }
}

export default function getLanguageData(lang) {
    let result = languages[lang];
    return result
}