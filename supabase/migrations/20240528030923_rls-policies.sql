alter table "public"."user_profiles" enable row level security;

create policy "all can see"
on "public"."user_profiles"
as permissive
for select
to public
using (true);


create policy "owners can update"
on "public"."user_profiles"
as permissive
for update
to public
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));


create policy "user can insert"
on "public"."user_profiles"
as permissive
for insert
to public
with check ((auth.uid() = user_id));



