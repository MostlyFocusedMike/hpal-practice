'use strict';

exports.getRiddle = (slug) => exports.riddles.find((riddle) => riddle.slug === slug);

exports.riddles = [
    {
        slug: 'no-body',
        question: 'I have a head & no body, but I do have a tail. What am I?',
        answer: 'A coin'
    },
    {
        slug: 'wet',
        question: 'I get wetter the more I dry. What am I?',
        answer: 'A towel'
    }
];
