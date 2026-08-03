const sessions = new Map<string, any>();


export function createSession(
  user: any
) {

  const sessionId =
  crypto.randomUUID();


  sessions.set(
    sessionId,
    user
  );


  return sessionId;

}



export function getSession(
  sessionId: string
) {

  return (
    sessions.get(sessionId) || null
  );

}



export function deleteSession(
  sessionId: string
) {

  sessions.delete(
    sessionId
  );

}