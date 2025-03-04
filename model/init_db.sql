--
-- Disable foreign key checks while resetting tables
--
SET foreign_key_checks = 0;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS cats;

SET foreign_key_checks = 1;

--
-- Create `cats` Table
--
CREATE TABLE cats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    image VARCHAR(500),  -- Store image URLs or file paths
    description TEXT,
    colour VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--
-- Create `comments` Table
-- Supports getting and posting comments for a specific cat via /api/comments/cat/:catid
--
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cat_id INT NOT NULL,  -- Foreign key to cats table
    comment_text TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE
);

--
-- Sample Data for Testing
--
INSERT INTO cats (name, location, image, description, colour)
VALUES 
('Whiskers', 'Old Town', 'https://i.ibb.co/SX9rL4Jg/IMG-20241024-WA0005.jpg', 'This little brown cat loves hanging out by the park, watching the world go by or maybe just bird watching! According to her collar she is called Whiskers.', 'Brown (tabby)'),

('Creepy', 'Leith', 'https://i.ibb.co/nswZXBhy/IMG-20241025-WA0000.jpg', 'Midnight visitor alert! This black and white cat keeps popping up on the outdoor cctv. Who do you belong to, mysterious little kitty?', 'Black and white (tuxedo)'),

('Toby', 'Stockbridge', 'https://i.ibb.co/kgkXrWbV/IMG-20241029-WA0007.jpg', 'Met the friendliest fluffball today! This cutie practically demanded cuddles. Clearly a professional in the art of charm!', 'Orange and white'),

('Shadow', 'New Town', 'https://i.ibb.co/DnqqB1M/IMG-20241029-WA0008.jpg', 'Morning coffee with a side of cat spotting ☕🐱 This sleek black cat lives opposite the café and always seems to be watching us. Plotting world domination? Or just hoping for a snack?', 'Black');

('Sushi', 'Morningside', 'https://i.ibb.co/bgcyGjS5/IMG-20250227-WA0037.jpg', 'This sleepy fella keeps coming into our garden for a mid-afternoon snooze. He once stole a piece of my nigiri so we have been calling him sushi.', 'Brown (tabby)'),

('Tulip', 'Portobello', 'https://i.ibb.co/KzKNNtpG/IMG-20250227-WA0035.jpg', 'I couldn’t work out why all my flowers were looking squashed but then I caught this little cat having a rest on my tulips!’ , ‘Mixed tri-colour (calico)')

('Squirrel', 'Southside', 'https://i.ibb.co/6cxF2HT5/IMG-20250227-WA0008.jpg', 'Just thought I would let whoever owns this tuxedo that I caught him trying to chase a squirrel up a tree. He did not succeed!’, 'Black and white (tuxedo)'),

('Blondie', 'Tollcross', 'https://i.ibb.co/V06J0ssY/IMG-20250227-WA0026.jpg', 'I keep seeing this fluffy cat rolling around sunbathing 🌤️', 'Orange'),

('Sprinkles', 'Bruntsfield', 'https://i.ibb.co/F4bWTfrk/IMG-20250227-WA0025.jpg', 'This little tuxedo was up on a fence near the grocery store this morning. She was super friendly and came over to me for head scratches. She even rolled over to show her belly! Looks like she`s a neighborhood regular, because a staff member told me her name was Sprinkles🧡', 'Black and white (tuxedo)''),

('Barney', 'South Queensferry', 'https://i.ibb.co/YFpngjjT/download-79.jpg', 'I see this black cat with green eyes almost everyday. Today he was lounging in the sun, totally uninterested in the dogs barking nearby. Very regal, like he knew she owned the place. Definitely a “king of the block” vibe! 👑', 'Black'),

('Sirius', 'Dalry', 'https://i.ibb.co/ZRx7z4Gs/20240715-144033.jpg', 'This fluffy black and white beast is Sirius, and he`s the king of The Swinging Arm! He lives upstairs and is adored by us regulars at the bar.', 'Black and white (tuxedo)'),

('Onyx', 'Gorgie', 'https://i.ibb.co/d08P0zpq/IMG-20250304-WA0005.jpg', 'Shoutout to this fluffy boy that likes to chill in my Grandmas garden. He has stunning pale green eyes and is friendly once he has time to check you out!', 'Black'),

(’Salem’, ‘Corstorphine’, ‘https://i.ibb.co/JjXdPGMH/IMG-20250304-WA0004.jpg’, ‘Spotted a sleek, slender black cat in the garden today. It`s clear she’s got a mysterious vibe—was just lying low among the flowers, eyes sharp and alert. She seemed kinda shy but I just let her be 🖤’, ‘Black’),

(’Felix’, ‘Southside’, ‘https://i.ibb.co/4g9ySQNN/IMG-20250227-WA0015.jpg’, ‘Stumbled across this cat while at work today, he was very calm & content despite the snow and got some pats from me!’, ‘Brown’),

(’Coco’, ‘West End’, ‘https://i.ibb.co/SDPgyVs3/20250116-152245.jpg’, ‘Meet Coco, the princess of my apartment building. Very sweet, but can be a little bossy when it comes to getting attention. She also doesn’t understand privacy as she likes to look into people’s flats through our communal balcony. I think she’s convinced she runs the building! 🤣’, ‘Mixed tri-colour (calico)’),

(’Butterfly Chasers’, ‘Stockbridge’, ‘https://i.ibb.co/pp0QfSt/IMG-20250227-WA0028.jpg’, ‘A delightful surprise in the garden today- two cats joined me in soaking up the sun! They seemed to be in their own little world, chasing after a butterfly at one point.’, ‘Orange and white’);


INSERT INTO comments (cat_id, comment_text, author)
VALUES 
(4, 'Such a cute cat! I see her on my way home from work', 'Lily'),
(9, 'I love tabbies!', 'Max'),
(11, 'Black cats are the best!', 'Oliver'),
(8, 'This cat is a real charmer!', 'Sophia'),
(6, 'Love their fluffy coat!', 'Jake'),
(15, 'I can’t get enough of their big, bright eyes!', 'Mia'),
(12, 'Such a sweet cat, they always make me smile', 'Lucas'),
(7, 'Fluffy cats are just the best!', 'Ella'),
(13, 'I could watch this cat for hours', 'Ben'),
(14, 'This cat has the most unique fur pattern!', 'Ava'),
(1, 'Such a playful kitty!', 'Charlie'),
(3, 'That cat\'s purring must be so soothing', 'Amelia'),
(10, 'I bet they’re a real cuddle bug!', 'Leo'),
(5, 'They have such a regal presence!', 'Chloe'),
(16, 'That cat looks like they belong in a cat show!', 'Ethan'),
(2, 'What a majestic cat!', 'Zoe'),
(8, 'I love their energy, they’re always so lively!', 'Lily'),
(10, 'This cat is a real neighborhood star!', 'Max'),
(13, 'Their fur is so soft and fluffy!', 'Oliver'),
(15, 'Such a confident cat!', 'Sophia'),
(5, 'I love the way they carry themselves!', 'Jake'),
(12, 'This cat always knows how to make an entrance!', 'Mia'),
(11, 'What a personality on this cat!', 'Lucas'),
(14, 'They have such a charming little meow', 'Ella'),
(6, 'I can tell this cat is full of character!', 'Ben'),
(9, 'This cat seems like they know they\'re special', 'Ava'),
(16, 'That little face is irresistible!', 'Charlie'),
(4, 'Such a sweet soul, I always see them hanging around the garden', 'Amelia'),
(2, 'What a cozy little ball of fur!', 'Leo'),
(1, 'This cat has the most beautiful eyes!', 'Chloe');




