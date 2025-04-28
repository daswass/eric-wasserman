-- Create a function to send emails using Supabase's email service
create or replace function public.send_email(
  to_email text,
  subject text,
  text_content text,
  html_content text
)
returns json
language plpgsql
security definer
as $$
declare
  result json;
begin
  select into result
    net.http_post(
      url := current_setting('app.settings.emails_endpoint')::text,
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key')::text
      ),
      body := jsonb_build_object(
        'to', to_email,
        'subject', subject,
        'text', text_content,
        'html', html_content
      )
    );
  
  return result;
end;
$$; 