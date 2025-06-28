const log = new JSONFile<{ logs: any[] }>('db/audit.json');
const audit = new Low(log);
await audit.read();
audit.data?.logs.push({
  timestamp: Date.now(),
  userId: session.user.id,
  action: 'Moved to Step 3',
  formId: 'abc123'
});
await audit.write();
