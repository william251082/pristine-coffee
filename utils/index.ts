const isEmpty = (obj: object) => {
    return obj && Object.keys(obj).length === 0
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export {isEmpty, fetcher}
