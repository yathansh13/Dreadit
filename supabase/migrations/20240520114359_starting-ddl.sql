create table user_profiles (
    user_id uuid primary key references auth.users(id) not null,
    username text unique not null,
    CONSTRAINT username_length CHECK (char_length(username) >= 3 AND char_length(username) <= 15),
    CONSTRAINT username_valid_chars CHECK (username ~ '^[a-zA-Z0-9_]+$'),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

